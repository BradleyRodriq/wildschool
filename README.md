# Wild School Experiences

A modern React website for **local academic excursions**. Visitors browse excursions and submit a booking request; the owner receives the details by email — no payment or checkout.

## 🚀 Features

- **What We Offer** - Browse local academic excursions and educational talks; request a booking or request a talk (contact form with subject pre-filled)
- **Booking by email** - No payment online; the owner receives booking details by email
- **Blog** - Owner-maintained blog (edit `src/data/blogPosts.js` to add or edit posts)
- **Contact** - Contact form that emails the owner (Formspree or mailto)
- **Responsive design** - Mobile-first with Tailwind and Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wild-school-experiences
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to GitHub Pages

1. **Set the correct `homepage` in `package.json`**  
   Replace the placeholder with your actual GitHub Pages URL:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
   ```
   Example: if your repo is `wildschool` and your username is `jane`, use:
   `https://jane.github.io/wildschool`

2. **Install dependencies** (including `gh-pages`):
   ```bash
   npm install
   ```

3. **Deploy** (builds and pushes the `build` folder to the `gh-pages` branch):
   ```bash
   npm run deploy
   ```

4. **Turn on GitHub Pages** in your repo:
   - GitHub → Your repo → **Settings** → **Pages**
   - Under **Source**, choose **Deploy from a branch**
   - Branch: **gh-pages** (or **main** if you use the root `/ (root)` folder)
   - If you used `npm run deploy`, select branch **gh-pages**, folder **/ (root)**, then Save.

Your site will be at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`.

**Note:** The app uses `basename={process.env.PUBLIC_URL}` so routing works correctly when served from the repo subpath.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── data/
│   ├── excursions.js   # Excursion listings (edit here)
│   ├── talks.js       # Educational talks (edit here)
│   └── blogPosts.js   # Blog posts (edit here to add/update blog)
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── AcademicExcursions.js  # What We Offer (excursions list)
│   ├── BookExcursion.js # Excursion booking (emails owner)
│   ├── Blog.js         # Blog listing
│   ├── BlogPost.js     # Single blog post
│   ├── Contact.js      # Contact form
│   └── About.js        # About page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and purple gradients
- **Typography**: Inter and Poppins fonts for readability
- **Animations**: Smooth page transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📱 Pages

### Home
- Hero section with call-to-action
- Feature highlights
- Statistics and testimonials
- Modern gradient backgrounds

### What We Offer
- **Excursions** — Local academic excursions; category and search; “Request booking” goes to booking form.
- **Talks** — Educational talks (duration, audience, topics); “Request this talk” opens the Contact form with the talk title and a short message template pre-filled.

### Blog
- List of posts (newest first); search by title/excerpt
- Single post view at `/blog/:slug`
- Owner adds/edits posts in `src/data/blogPosts.js` (title, date, excerpt, image, body paragraphs)

### Book Excursion
- Choose an excursion (or arrive via link from an excursion card)
- Submit contact details, group size, preferred date/time, and notes
- **Email to owner**: either via [Formspree](https://formspree.io) (optional) or a `mailto:` fallback
- No payment — owner confirms by email

### Contact
- Contact form (name, email, subject, message) — emails owner via Formspree or mailto

### About
- Company mission and vision
- Team information
- Awards and recognition
- Contact details

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... more shades
  },
  secondary: {
    50: '#fdf4ff',
    // ... more shades
  }
}
```

### Content
- Edit excursions in `src/data/excursions.js`
- Edit talks in `src/data/talks.js` (title, description, duration, audience, topics, image, format)
- Add or edit blog posts in `src/data/blogPosts.js` (title, slug, date, excerpt, image, author, body array)
- Edit team and copy in `About.js` and translation files in `src/translations/`

### Sending booking emails to the owner
- **Option A (recommended)**  
  Create a form at [Formspree](https://formspree.io), get your form ID, and set:
  ```bash
  REACT_APP_FORMSPREE_FORM_ID=your_form_id
  ```
  Submissions will POST to Formspree and the owner will receive an email.
- **Option B (no signup)**  
  Set the owner’s email in `.env`:
  ```bash
  REACT_APP_OWNER_EMAIL=owner@example.com
  ```
  Submitting the booking form will open the user’s email client with a pre-filled message to that address.  
Copy `.env.example` to `.env` and fill in the values.

### Images
Replace placeholder cat images with your own educational content:
- Update image URLs in component files
- Use consistent aspect ratios for best results
- Optimize images for web performance

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

## 🎯 Future Enhancements

- [ ] Admin dashboard for excursion management
- [ ] Optional payment integration
- [ ] Real-time availability calendar
- [ ] Multi-language support (EN/ES structure already in place)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: info@wildschool.com
- Phone: +1 (555) 123-4567

## 🙏 Acknowledgments

- Placeholder images provided by [PlaceKitten](https://placekitten.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animation library by [Framer Motion](https://www.framer.com/motion/)
- Styling framework by [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ for educational excellence
