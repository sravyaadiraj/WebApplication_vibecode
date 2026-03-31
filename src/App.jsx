import './App.css'

function App() {
  const projects = [
    {
      title: 'Image Classification with CNN',
      description: 'Built a convolutional neural network to classify images from the CIFAR-10 dataset, achieving 85% accuracy. Demonstrates deep learning fundamentals and computer vision skills.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      link: 'https://github.com/yourusername/image-classification'
    },
    {
      title: 'Chatbot with Natural Language Processing',
      description: 'Developed an AI chatbot using RNNs and NLP techniques for intent recognition and response generation. Integrated with a web interface for real-time interaction.',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
      link: 'https://github.com/yourusername/chatbot-nlp'
    },
    {
      title: 'Recommendation System',
      description: 'Implemented a collaborative filtering-based recommendation system for movie suggestions using the MovieLens dataset. Explored both user-based and item-based approaches.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Surprise'],
      link: 'https://github.com/yourusername/recommendation-system'
    },
    {
      title: 'Time Series Forecasting',
      description: 'Created a model to forecast stock prices using LSTM networks. Analyzed historical data and evaluated performance with metrics like RMSE and MAE.',
      technologies: ['Python', 'Keras', 'Pandas', 'Matplotlib'],
      link: 'https://github.com/yourusername/time-series-forecasting'
    },
    {
      title: 'Sentiment Analysis on Social Media',
      description: 'Performed sentiment analysis on Twitter data using BERT for text classification. Preprocessed data, fine-tuned the model, and visualized results.',
      technologies: ['Python', 'Transformers', 'Hugging Face', 'Pandas'],
      link: 'https://github.com/yourusername/sentiment-analysis'
    },
    {
      title: 'Anomaly Detection in IoT Data',
      description: 'Applied unsupervised learning techniques like Isolation Forest and Autoencoders to detect anomalies in sensor data from IoT devices.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
      link: 'https://github.com/yourusername/anomaly-detection'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>AI Projects for ML/AI Career Growth</h1>
        <p>Showcase of machine learning and artificial intelligence projects to demonstrate skills and expertise in the field.</p>
      </header>
      <main className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>Built with React and Vite. Deployed on Vercel.</p>
      </footer>
    </div>
  )
}

export default App
