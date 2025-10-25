const dotenv = require("dotenv");
dotenv.config();
const OpenAI = require("openai");
//groq
const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes text concisely."
        },
        {
          role: "user",
          content: `Summarize this:\n${text}`
        }
      ],
      max_tokens: 500,
      temperature: 0.5,
    });
    
    res.status(200).json(completion.choices[0].message.content.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that writes detailed paragraphs."
        },
        {
          role: "user",
          content: `Write a detailed paragraph about:\n${text}`
        }
      ],
      max_tokens: 500,
      temperature: 0.5,
    });
    
    res.status(200).json(completion.choices[0].message.content.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: text
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });
    
    res.status(200).json(completion.choices[0].message.content.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are an expert JavaScript programmer. Convert instructions to clean, working JavaScript code."
        },
        {
          role: "user",
          content: `Convert these instructions into JavaScript code:\n${text}`
        }
      ],
      max_tokens: 400,
      temperature: 0.25,
    });
    
    res.status(200).json(completion.choices[0].message.content.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

