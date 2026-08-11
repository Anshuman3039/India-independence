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
    "history-intro-1.jpg": "Harappa archaeological site ruins",
    "history-intro-2.jpg": "Didarganj Yakshi sculpture",
    "history-intro-3.jpg": "Indian manuscript palm leaf ancient",
    "history-intro-4.jpg": "Brihadisvara Temple Thanjavur Tanjore",
    "history-intro-5.jpg": "Mughal painting court miniature",
    "history-intro-6.jpg": "Gateway of India historical vintage",
    "history-intro-7.jpg": "Indian independence flag 1947",
    "history-intro-8.jpg": "Mumbai Marine Drive skyline night",
    "era-early.jpg": "Mohenjo-daro ruins archaeology",
    "era-kingdoms.jpg": "Sarnath Lion Capital Ashoka",
    "era-medieval.jpg": "Hampi ruins Vijayanagara temple",
    "era-colonial.jpg": "East India House painting London",
    "era-freedom.jpg": "Mahatma Gandhi Salt March Dandi 1930",
    "era-republic.jpg": "Indian Constitution original document signing",
    "city-harappa.jpg": "Harappa archaeological excavation mound",
    "city-mohenjo.jpg": "Mohenjo-daro Great Bath ruins",
    "city-dholavira.jpg": "Dholavira reservoir Harappan",
    "city-lothal.jpg": "Lothal dockyard ruins",
    "idea-buddhism.jpg": "Sanchi Stupa Great Stupa ancient",
    "idea-trade.jpg": "Ajanta ship painting caves",
    "people-power-1.jpg": "Mughal miniature emperor scholar",
    "people-power-2.jpg": "traditional Indian weaver handloom",
    "freedom-1857.jpg": "1857 Indian Uprising prints",
    "freedom-1885.jpg": "first session Indian National Congress 1885",
    "freedom-1905.jpg": "Swadeshi movement cloth bonfire",
    "freedom-1919.jpg": "Jallianwala Bagh memorial wall",
    "freedom-1930.jpg": "Dandi march Gandhi 1930",
    "freedom-1942.jpg": "Quit India resolution Bombay 1942",
    "freedom-1947.jpg": "15 August 1947 Red Fort Nehru",
    "rep-train-then.jpg": "steam locomotive train India vintage",
    "rep-train-now.jpg": "Vande Bharat Express train",
    "rep-science-then.jpg": "ISRO rocket nose cone bicycle",
    "rep-science-now.jpg": "ISRO GSLV rocket launch",
    "rep-city-then.jpg": "Bombay tram vintage street",
    "rep-city-now.jpg": "Mumbai Bandra Worli Sea Link",
    "rep-comm-then.jpg": "vintage postbox postman India",
    "rep-comm-now.jpg": "mobile phone digital UPI India"
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

os.makedirs("public/images/history", exist_ok=True)
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
            filepath = os.path.join("public/images/history", filename)
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

with open("public/images/history/source_attribution.json", "w", encoding="utf-8") as f:
    json.dump(metadata_records, f, indent=2, ensure_ascii=False)
print("\nHistory attribution metadata written to public/images/history/source_attribution.json")
