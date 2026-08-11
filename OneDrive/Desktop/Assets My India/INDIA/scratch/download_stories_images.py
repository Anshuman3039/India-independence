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
    "stories-intro-1.jpg": "railway station platform India morning",
    "stories-intro-2.jpg": "tea maker tea stall India",
    "stories-intro-3.jpg": "monsoon rain street India",
    "stories-intro-4.jpg": "fishing boats coast India sunset",
    "stories-intro-5.jpg": "artisan handloom weaving",
    "stories-intro-6.jpg": "child looking sky India",
    "stories-intro-7.jpg": "city night street India traffic",
    
    "story1-station.jpg": "Indian railway platform passengers station",
    "story1-train.jpg": "train arriving platform India",
    "story1-inside.jpg": "passengers inside train compartment India",
    "story1-window.jpg": "paddy fields from train window",
    
    "story2-before.jpg": "monsoon clouds sky India",
    "story2-rain.jpg": "monsoon rain umbrellas street India",
    "story2-fields.jpg": "green paddy fields farming monsoon India",
    
    "story3-hands.jpg": "weaver hands handloom weaving",
    "story3-loom.jpg": "weaving loom threads",
    "story3-textile.jpg": "traditional Indian sarees colorful fabrics",
    
    "story4-prep.jpg": "brewing tea kettle spices India",
    "story4-stall.jpg": "chai wallah tea shop customers",
    "story4-glass.jpg": "cutting chai tea glass India",
    
    "story5-coast.jpg": "fishing nets sea Kerala coast",
    "story5-market.jpg": "fish market harbor India",
    "story5-sunset.jpg": "coastal boats sunset sea India",
    
    "story6-child.jpg": "child night sky stars",
    "story6-lab.jpg": "school science lab experiment students India",
    "story6-launch.jpg": "ISRO rocket launch lift off GSLV"
}

def get_commons_file_url(file_title):
    params = {
        "action": "query",
        "titles": file_title,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
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
            metadata = imageinfo.get("extmetadata", {})
            artist = metadata.get("Artist", {}).get("value", "Unknown")
            license_name = metadata.get("LicenseShortName", {}).get("value", "CC BY-SA")
            description = metadata.get("ImageDescription", {}).get("value", "")
            artist = re.sub(r'<[^>]*>', '', artist)
            description = re.sub(r'<[^>]*>', '', description)
            return direct_url, artist, license_name, description
    except Exception as e:
        print(f"Error getting file URL for {file_title}: {e}")
    return None, None, None, None

def search_commons(keyword):
    params = {
        "action": "query",
        "list": "search",
        "srsearch": keyword,
        "srnamespace": "6",
        "srlimit": "15",
        "format": "json"
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        search_results = data.get("query", {}).get("search", [])
        for res in search_results:
            title = res.get("title")
            if title.lower().endswith(('.jpg', '.jpeg', '.png')) and "pdf" not in title.lower() and "book" not in title.lower() and "map" not in title.lower():
                return title
    except Exception as e:
        print(f"Error searching for {keyword}: {e}")
    return None

os.makedirs("public/images/stories", exist_ok=True)
metadata_records = {}

for filename, keyword in queries.items():
    print(f"\nSearching for '{keyword}'...")
    title = search_commons(keyword)
    if title:
        try:
            print(f"Found title: {title.encode('ascii', 'replace').decode('ascii')}")
        except:
            print("Found title containing non-ascii characters")
            
        direct_url, artist, license_name, description = get_commons_file_url(title)
        if direct_url:
            filepath = os.path.join("public/images/stories", filename)
            try:
                img_req = urllib.request.Request(direct_url, headers=headers)
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(filepath, "wb") as f:
                        f.write(img_resp.read())
                print(f"Downloaded {filename}.")
                metadata_records[filename] = {
                    "source": "Wikimedia Commons",
                    "original_url": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title)}",
                    "photographer": artist,
                    "license": license_name,
                    "description": description[:150]
                }
            except Exception as e:
                print(f"Failed downloading {filename}: {e}")
        else:
            print(f"Could not retrieve direct URL for {title}")
    else:
        print(f"No results for {keyword}")

with open("public/images/stories/source_attribution.json", "w", encoding="utf-8") as f:
    json.dump(metadata_records, f, indent=2, ensure_ascii=False)
print("\nStories attribution metadata written to public/images/stories/source_attribution.json")
