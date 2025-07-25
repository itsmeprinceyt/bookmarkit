# About  
This website is made for my personal use to store certain bookmarks which I frequently access. It's so pain in the ass to find and open those tabs so I figured I'd rather make a website that holds all my important most used bookmarks.

# To Add New Bookmarks or edit
- Open `@/utils/websites.js`
- Add/Modify/Delete the website data along with required data such as top.gg vote, logo, text, image alt.
- Save and thats it!

## Future Development
I will make a small full-stack project in which you can
- Create your own account
- Upload upto 6 or 8 bookmarks along with a display photo
- Generate a personalized link which you can choose to be public ( if u want to share ) or keep it private ( so only u can access ).
- Then you can use that generated website to acccess your entered bookmarks whenever you want.




# Personal Bookmark Shortcut Website
A minimalist personal site to keep your most-used bookmarks easily accessible—no more endless searching or tab clutter!
Built for quick personal use, but future-ready for expansion.

## 🚀 Overview
- Tired of hunting through countless open tabs for your favorite websites?
- This project is a fast, custom alternative:
- Store your top links with logos and images.
- Access all your favorite sites from a single well-designed page.
- Clean bookmark grid: Quick access to your favorite links, styled and grouped.
- Logos and images: Each bookmark displays a relevant image or logo for easier scanning.
## Easy customization:
- Add, remove, or modify links directly by editing a simple JavaScript array.
- No backend needed: Purely static (for now) and blazing fast!

# 🛠️ Usage & How To Add Bookmarks
All bookmarks, images, and extra data live in a single file:
`@/utils/websites.js`

**To add, edit, or remove bookmarks:**
1. Open @/utils/websites.js
2. Modify the Websites array:
3. Add a new { title, src, image_alt, link } object
4. Change existing entries
5. Remove those you don’t use
6. Save — the website will update automatically!

## 🖼️ Adding or Changing Images
- Place new images in /static/images/
- Reference using the src field in each website object.

## 🧑‍💻 Tech Stack
- Next.js + React
- Tailwind CSS

## 🚧 Future Development
**Planned features:** ( Link: TBA )
- **User accounts:** Log in and save your own set of bookmarks.
- **Personalized pages:** Upload a display photo and up to 6-8 bookmarks per user.
- **Sharable links:** Make your personal bookmark board public or private.
- **Easy management:** Edit bookmarks from a web interface—no code needed.

## 🤝 Contributions
Not intended as a public product, but feel free to fork or use as inspiration for your own bookmarks page!

# Live Link
https://discord-shortcuts-nextjs.vercel.app/