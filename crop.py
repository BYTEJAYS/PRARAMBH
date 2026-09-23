from PIL import Image

# Open the image
img = Image.open('public/assets/logo.png')
print(f"Size: {img.size}")

# Find the bounding box of non-transparent pixels
bbox = img.getbbox()
print(f"BBox: {bbox}")

# We want to crop out the bottom part? Let's just output the pixel heights where things are
