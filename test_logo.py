from PIL import Image

img = Image.open('public/assets/logo.png').convert('RGBA')
width, height = img.size
colors = img.getcolors(width * height)

has_purple = False
for count, (r, g, b, a) in colors:
    if a > 10 and b > r and b > g and r > 30 and b > 50:
        has_purple = True
        print(f"Found purplish/bluish color: rgb({r},{g},{b}) count={count}")

if not has_purple:
    print("No purple found in logo.png pixels!")
else:
    print("Purple found!")
