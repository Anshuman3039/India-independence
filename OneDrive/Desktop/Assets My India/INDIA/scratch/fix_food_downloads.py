import urllib.request
import urllib.parse
import json
import re
import os
import sys

# Configure UTF-8 stdout to prevent Windows console crashes on non-ASCII characters
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'AntigravityIndiaCelebration/1.0 (contact: yoga-developer@gemini-workspace.com)',
}

queries = {
    "food-intro.jpg": "cooking at Indian home",
    "region-north.jpg": "Dal Makhani bowl",
    "region-east.jpg": "Pakhala bhata",
    "ingredient-lentils.jpg": "raw red lentils",
    "ingredient-chilies.jpg": "dried red chillies",
    "everyday-chai.jpg": "tea maker street India"
}

def get_commons_file_url(file_title):
    params = {
        "action": "query",
        "titles": file_title,
        "prop": "imageinfo",
        "iiprop": "url",
        "format": "json"
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        pages = data.get("query", {}).get("pages", {})
        for page_id, page in pages.items():
            imageinfo = page.get("imageinfo", [{}])[0]
            direct_url = imageinfo.get("url")
            return direct_url
    except Exception as e:
        print(f"Error getting file URL for {file_title}: {e}")
    return None

def search_commons(keyword):
    params = {
        "action": "query",
        "list": "search",
        "srsearch": keyword,
        "srnamespace": "6", # Files only
        "srlimit": "10",
        "format": "json"
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        results = data.get("query", {}).get("search", [])
        for res in results:
            title = res.get("title")
            if title.lower().endswith(('.jpg', '.jpeg', '.png')) and "pdf" not in title.lower() and "book" not in title.lower():
                return title
    except Exception as e:
        print(f"Error searching for {keyword}: {e}")
    return None

os.makedirs("public/images/food", exist_ok=True)

for filename, keyword in queries.items():
    print(f"\nFixing '{filename}' using keyword '{keyword}'...")
    title = search_commons(keyword)
    if title:
        try:
            print(f"Found title: {title.encode('ascii', 'replace').decode('ascii')}")
        except:
            print("Found title containing non-ascii characters")
            
        direct_url = get_commons_file_url(title)
        if direct_url:
            filepath = os.path.join("public/images/food", filename)
            try:
                img_req = urllib.request.Request(direct_url, headers=headers)
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(filepath, "wb") as f:
                        f.write(img_resp.read())
                print(f"Successfully fixed {filename} from {direct_url}")
            except Exception as e:
                print(f"Failed downloading {filename}: {e}")
        else:
            print(f"Could not retrieve direct URL for {title}")
    else:
        print(f"No results for {keyword}")
