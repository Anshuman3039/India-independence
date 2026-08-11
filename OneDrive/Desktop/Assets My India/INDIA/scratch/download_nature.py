import urllib.request
import urllib.parse
import json
import re
import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'AntigravityIndiaCelebration/1.0 (contact: yoga-developer@gemini-workspace.com)',
}

queries = {
    "nature-intro.jpg": "Western Ghats landscape hills",
    "geo-himalayas.jpg": "Himalayas mountains peaks India",
    "geo-thar.jpg": "Thar Desert dunes Rajasthan",
    "geo-plains.jpg": "Indo Gangetic Plains agriculture",
    "geo-ghats.jpg": "Western Ghats forest green",
    "geo-northeast.jpg": "Northeast India mountains forest",
    "geo-coastal.jpg": "Coastal India sea cliffs",
    "geo-islands.jpg": "Andaman Islands beach tropical",
    "eco-himalayan.jpg": "alpine meadow Himalayas",
    "eco-desert.jpg": "Thar desert scrub vegetation",
    "eco-forest.jpg": "Indian forest trees canopy",
    "eco-grasslands.jpg": "savanna grasslands India",
    "eco-wetlands.jpg": "wetland marsh Keoladeo",
    "eco-mangroves.jpg": "Sundarbans mangrove roots",
    "eco-coastal.jpg": "coastal marine environment India",
    "wildlife-tiger.jpg": "Bengal tiger Panthera tigris wild",
    "wildlife-lion.jpg": "Asiatic lion Panthera leo persica Gir",
    "wildlife-elephant.jpg": "Asian elephant Elephas maximus wild",
    "wildlife-rhino.jpg": "Greater one horned rhinoceros Kaziranga",
    "wildlife-peafowl.jpg": "Indian peafowl wild",
    "wildlife-gharial.jpg": "Gharial Gavialis gangeticus wild",
    "wildlife-snowleopard.jpg": "Snow leopard Panthera uncia wild",
    "wildlife-buffalo.jpg": "Wild water buffalo Bubalus arnee",
    "people-rivers.jpg": "Ganga river boats settlement",
    "people-coasts.jpg": "traditional fishing India coastal",
    "people-forests.jpg": "forest community livelihood India",
    "people-mountains.jpg": "Himalayan village village life",
    "people-grasslands.jpg": "pastoral sheep herding India"
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

os.makedirs("public/images/nature", exist_ok=True)
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
            filepath = os.path.join("public/images/nature", filename)
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

with open("public/images/nature/source_attribution.json", "w", encoding="utf-8") as f:
    json.dump(metadata_records, f, indent=2, ensure_ascii=False)
print("\nNature attribution metadata written to public/images/nature/source_attribution.json")
