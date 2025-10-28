# Wild School Experiences

A modern, beautiful React website for educational content, academic excursions, and workshop booking. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Educational Content Library** - Browse and search through comprehensive learning materials
- **Academic Excursions** - Explore field trips and educational journeys
- **Workshop Booking System** - Multi-step booking process for educational workshops
- **Responsive Design** - Mobile-first approach with beautiful animations
- **Modern UI/UX** - Clean, professional design with smooth interactions

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

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── EducationalContent.js  # Content library
│   ├── AcademicExcursions.js  # Field trips
│   ├── BookWorkshop.js # Workshop booking
│   └── About.js        # Company information
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

### Educational Content
- Searchable content library
- Category filtering
- Content cards with ratings
- Interactive elements

### Academic Excursions
- Field trip destinations
- Location-based filtering
- Detailed excursion information
- Booking integration

### Book Workshop
- Multi-step booking process
- Workshop selection
- Form validation
- Success confirmation

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
- Update workshop information in `BookWorkshop.js`
- Modify excursion details in `AcademicExcursions.js`
- Edit team information in `About.js`

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

- [ ] User authentication system
- [ ] Admin dashboard for content management
- [ ] Payment integration for workshops
- [ ] Real-time booking calendar
- [ ] Student progress tracking
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] Email notification system

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
