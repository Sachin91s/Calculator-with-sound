# Calculator Web App

A simple calculator built with HTML, CSS, and JavaScript.

## Features
- Basic arithmetic operations (+, -, ×, ÷)
- Clear (C) and Delete (del) functions
- Parentheses support
- Sound feedback on button clicks
- Responsive design

## Files
- `index.html` - Main structure
- `Styles.css` - Styling and layout
- `Script.js` - Calculator functionality
- `Sound/tic_sound.mp3` - Click sound effect

## Usage
Open `index.html` in a web browser to use the calculator.

## Technologies
- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript
- Audio API
```
Calculator/
├── index.html          # Main HTML file
├── Styles.css          # CSS styling
├── Script.js           # JavaScript functionality
└── Sound/
    └── tic_sound.mp3   # Button click sound effect
```

## 🎯 How to Use

1. **Open the Calculator**: Double-click `index.html` to open in your web browser
2. **Basic Operations**:
   - Click number buttons (0-9) to input numbers
   - Click operator buttons (+, -, ×, ÷) for calculations
   - Use decimal point (.) for floating-point numbers
3. **Special Functions**:
   - **C**: Clear the entire screen
   - **del**: Delete the last character
   - **()**: Add parentheses for complex expressions
   - **=**: Calculate the result
4. **Sound**: Each button press plays a satisfying click sound

## 🎨 Design Features

- **Clean Interface**: Minimalist design with proper spacing
- **Visual Feedback**: Buttons have active states with transform effects
- **Color Coding**: Operator buttons are highlighted in teal (#66fcd2)
- **Responsive**: Centered layout that works on various screen sizes
- **Typography**: Clear, readable fonts with appropriate sizing

## 🔧 JavaScript Functions

The calculator includes the following JavaScript functions:

- `input(x)`: Appends values to the screen and plays sound
- `allclear()`: Clears the entire screen
- `del()`: Deletes the last character
- `calc()`: Evaluates the mathematical expression using `eval()`
- `playSound()`: Plays the click sound effect

## 🎵 Sound System

- Sound plays on every button press
- Audio resets to beginning on each play for immediate feedback
- Uses HTML5 audio element with MP3 format

## 🌟 Browser Compatibility

Works on all modern browsers that support:
- HTML5 audio
- CSS Grid
- JavaScript ES6+

## 📱 Responsive Design

The calculator features:
- Centered layout using Flexbox
- Grid-based button arrangement
- Appropriate sizing for different devices
- Touch-friendly button sizes

## 🚀 Getting Started

Simply clone or download the project files and open `index.html` in your web browser. No installation or build process required!

## 🎯 Future Enhancements

Potential improvements could include:
- Memory functions (M+, M-, MR, MC)
- Scientific calculator functions
- Theme switching (light/dark mode)
- Keyboard support
- Calculation history


**Note**: This calculator uses JavaScript's `eval()` function for calculations, which is suitable for this educational project. For production use, consider implementing a more secure expression parser.
