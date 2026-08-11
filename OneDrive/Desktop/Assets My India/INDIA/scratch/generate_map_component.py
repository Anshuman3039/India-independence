import re
import os

svg_path = r"C:\Users\yoga\.gemini\antigravity\brain\8aa263bd-4cee-469d-97eb-9335ae78baa1\scratch\india_raw.svg"
out_path = os.path.abspath("src/components/home/ExploreIndia/IndiaMap.jsx")

print(f"Reading SVG from {svg_path}...")
with open(svg_path, "r", encoding="utf-8") as f:
    svg_content = f.read()

# Regular expression to extract <path> elements
pattern = re.compile(r'<path\s+id="([^"]+)"\s+name="([^"]+)"\s+d="([^"]+)"\s*/?>', re.DOTALL)
paths = pattern.findall(svg_content)

print(f"Extracted {len(paths)} state paths.")

# Start generating the React component code
jsx_header = """import React from 'react';

export default function IndiaMap({ selectedStateId, onStateHover, onStateLeave, onStateSelect }) {
  // 10 prominent states with full cultural datasets
  const featuredStates = ["rj", "kl", "as", "wb", "jk", "mh", "mp", "tn", "gj", "pb"];

  const handleStateClick = (id, name) => {
    onStateSelect(id, name);
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 612 696"
      className="w-full h-auto text-charcoal stroke-charcoal stroke-[0.8] fill-none cursor-crosshair select-none"
      aria-label="Interactive Map of India States and Regions"
      role="group"
    >
"""

jsx_footer = """    </svg>
  );
}
"""

with open(out_path, "w", encoding="utf-8") as f:
    f.write(jsx_header)
    
    # Write paths
    for state_id, name, d in paths:
        d_clean = " ".join(d.split())
        
        path_tag = """      <path
        id="%s"
        name="%s"
        d="%s"
        tabIndex={0}
        role="button"
        aria-label="%s region. Press Enter to select."
        className={`transition-all duration-300 outline-none cursor-pointer ${
          selectedStateId === "%s"
            ? "fill-[#16734A]/10 stroke-[#16734A] stroke-[2.2]"
            : featuredStates.includes("%s")
            ? "fill-[#E8752A]/2.5 stroke-charcoal/45 hover:fill-charcoal/5 hover:stroke-[#E8752A] hover:stroke-[1.6] focus-visible:fill-charcoal/8 focus-visible:stroke-[#E8752A] focus-visible:stroke-[2]"
            : "fill-[#171717]/1 stroke-charcoal/20 hover:fill-charcoal/5 hover:stroke-[#E8752A] hover:stroke-[1.6] focus-visible:fill-charcoal/8 focus-visible:stroke-[#E8752A] focus-visible:stroke-[2]"
        }`}
        onMouseEnter={(e) => onStateHover(e, "%s", "%s")}
        onMouseLeave={onStateLeave}
        onFocus={(e) => onStateHover(e, "%s", "%s")}
        onBlur={onStateLeave}
        onClick={() => handleStateClick("%s", "%s")}
        onKeyDown={(e) => e.key === 'Enter' && handleStateClick("%s", "%s")}
      />\n""" % (
            state_id, name, d_clean, name, state_id, state_id,
            state_id, name, state_id, name, state_id, name, state_id, name
        )
        
        f.write(path_tag)
        
    f.write(jsx_footer)

print(f"Successfully generated map component at {out_path}.")
