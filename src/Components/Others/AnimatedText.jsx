import './AnimatedText.css';

const AnimatedText = () => {
    const text = "I'm a ";
    const text2 = "Full Stack Developer";
    return (
        <div className="animated-text">
            <div className="first3">
            {text.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      {char === ' ' ? '\u00A0' : char}
                </span>
            ))}</div>
            <div className="first4">
             {text2.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      {char === ' ' ? '\u00A0' : char}
                </span>
            ))}</div>
        </div>
    );
};

export default AnimatedText;
