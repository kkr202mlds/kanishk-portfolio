import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Kanishk Kumar</h1>
        <p className="text-lg">Data Scientist | Python Associate | ML Analyst</p>
        <p className="italic">“Code Smart. Think Python.”</p>
        <p className="text-sm">kanishkk202@gmail.com | <a className="text-blue-600" href="https://www.linkedin.com/in/kkanishk32">LinkedIn</a> | +91-9990465116 | Noida, Uttar Pradesh</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I'm Kanishk Kumar, 1.6+ years of experience in Python, ML & Data Science with a Master's in Data Science from Higher School of Economics (HSE), Moscow, Russia.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc pl-5">
          <li><strong>Languages:</strong> Python, SQL, C/C++, HTML & CSS</li>
          <li><strong>Frameworks:</strong> Pandas, Numpy, Scikit-Learn, Matplotlib</li>
          <li><strong>Tools:</strong> PostgreSQL, Excel, PowerPoint, Docker</li>
          <li><strong>Platforms:</strong> Jupyter Notebook, PyCharm, VS Code</li>
          <li><strong>Libraries:</strong> FastAPI, OpenAI, MLflow, Celeb</li>
          <li><strong>Cloud:</strong> Azure, Google Colab, JupyterLab</li>
          <li><strong>Techniques:</strong> Data Viz, Mining, Sorting, DL, Stats</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>MLflow-Docker-Flask-Iris-Classification-Application-LSML</strong>
            <p>EDA with SVM, LR, DT, K-NN | Tools: Python, Flask, Docker, Celery, MLflow</p>
          </li>
          <li>
            <strong>Question Answering with Fine-tuned BERT on BoolQ</strong>
            <p>NLP Chatbot using BERT, word2vec, Stopwords | Tools: Python, Sklearn, Pandas</p>
          </li>
          <li>
            <strong>Advanced-Python-Spark-DataFrame-and-HDFS-RDD-LSML</strong>
            <p>Click prediction analysis with Spark RDD & DataFrame APIs</p>
          </li>
        </ul>
        <p className="pt-2">🔗 <a className="text-blue-600" href="https://github.com/kkr202mlds">View all on GitHub</a></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc pl-5">
          <li>The Complete Machine Learning Course with Python (Udemy)</li>
          <li>Python 3: Project-based Python, Algorithms, Data Structures (Udemy)</li>
          <li>IBM Python 101 for Data Science</li>
          <li>Google Data Analytics Professional Certificate</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Education & Internships</h2>
        <ul className="list-disc pl-5">
          <li>MS Data Science – HSE, Moscow (2021–2023)</li>
          <li>Intern – AirCode Technologies Pvt. Ltd. (2019–2020)</li>
          <li>BTech Food Tech – HBTI Kanpur, India (2017)</li>
          <li>Certificate Course in C Language – Data Expert (2018–2019)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>📧 kanishkk202@gmail.com</p>
        <p>🔗 <a className="text-blue-600" href="https://linkedin.com/in/kkanishk32">LinkedIn</a> | <a className="text-blue-600" href="https://github.com/kkr202mlds">GitHub</a></p>
        <p>🌍 Available for remote/office work, mentoring, collaborations</p>
      </section>
    </main>
  );
}
