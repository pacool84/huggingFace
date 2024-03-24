import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config();

const hf = new HfInference(process.env.HF_TOKEN_API);
const imageUrl = "https://i.ytimg.com/vi/n24l9gvM3XM/maxresdefault.jpg";

const response = await fetch(imageUrl);
const blob = await response.blob();

const result = await hf.imageToText({
  data: blob,
  model: "Salesforce/blip-image-captioning-large",
});

console.log(result);
