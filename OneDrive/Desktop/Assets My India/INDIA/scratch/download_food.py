import urllib.request
import urllib.parse
import json
import re
import os

headers = {
    'User-Agent': 'AntigravityIndiaCelebration/1.0 (contact: yoga-developer@gemini-workspace.com)',
}

queries = {
    "food-intro.jpg": "cooking food home kitchen India",
    "region-north.jpg": "Rajma Chawal or Dal Makhani",
    "region-west.jpg": "Gujarati Thali vegetarian",
    "region-east.jpg": "Pakhala or Bengali fish curry",
    "region-south.jpg": "South Indian Dosa or Idli",
    "region-northeast.jpg": "Assamese thali traditional",
    "region-himalayan.jpg": "Thukpa soup momo",
    "region-coastal.jpg": "Goan fish curry coconut",
    "ingredient-rice.jpg": "paddy field harvest India",
    "ingredient-millets.jpg": "Bajra pearl millet grains",
    "ingredient-lentils.jpg": "dal lentils collection",
    "ingredient-chilies.jpg": "red chillies dry heap",
    "ingredient-coconut.jpg": "fresh coconut grated",
    "ingredient-tamarind.jpg": "tamarind pods dry",
    "ingredient-ginger.jpg": "fresh ginger root rhizome",
    "ingredient-turmeric.jpg": "turmeric rhizome powder",
    "everyday-chai.jpg": "chai wallah street stall",
    "everyday-vendor.jpg": "pani puri street food vendor",
    "everyday-lunch.jpg": "Mumbai dabbawala tiffin lunch"
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
        "srlimit": "5",
        "format": "json"
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        search_results = data.get("query", {}).get("search", [])
        if search_results:
            for res in search_results:
                title = res.get("title")
                if title.lower().endswith(('.jpg', '.jpeg', '.png')):
                    return title
            return search_results[0].get("title")
    except Exception as e:
        print(f"Error searching for {keyword}: {e}")
    return None

os.makedirs("public/images/food", exist_ok=True)
metadata_records = {}

for filename, keyword in queries.items():
    print(f"\nSearching for '{keyword}'...")
    title = search_commons(keyword)
    if title:
        print(f"Found title: {title}")
        direct_url, artist, license_name, description = get_commons_file_url(title)
        if direct_url:
            filepath = os.path.join("public/images/food", filename)
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

with open("public/images/food/source_attribution.json", "w", encoding="utf-8") as f:
    json.dump(metadata_records, f, indent=2, ensure_ascii=False)
print("\nFood attribution metadata written to public/images/food/source_attribution.json")
