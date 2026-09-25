const questions = [
  {
    question: "Tell me about yourself.",
    answer:
      "Introduce yourself with your name, education, skills, projects, and career goals in 1-2 minutes.",
  },
  {
    question: "Why should we hire you?",
    answer:
      "Highlight your technical skills, learning ability, teamwork, and willingness to contribute.",
  },
  {
    question: "What are your strengths?",
    answer:
      "Mention strengths like problem-solving, communication, quick learning, and teamwork.",
  },
  {
    question: "What is your weakness?",
    answer:
      "Mention a real weakness and explain how you are improving it.",
  },
  {
    question: "Where do you see yourself in 5 years?",
    answer:
      "Talk about career growth, learning, and becoming a valuable professional.",
  },
];

const HRInterview = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          👨‍💼 HR Interview Questions
        </h1>

        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <h2 className="text-xl font-bold text-blue-600">
              Q{index + 1}. {item.question}
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              {item.answer}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HRInterview;