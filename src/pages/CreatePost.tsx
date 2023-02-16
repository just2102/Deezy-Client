import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import { getRandomPrompt } from "../utils";
import preview from "../assets/preview.png"
import Preloader from "../Components/Preloader";

const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(true);
  const [loading, setLoading] = useState(false);
//   form controls
const [form, setForm] = useState({
    title: '',
    prompt: '',
    photo: ''
})
const generateImage = () => {
    if (form.prompt) {
        console.log(`generating image with the following data: title: ${form.title}, prompt: ${form.prompt}`)
    }

}
const onTitleChange = (newTitle:string) => {
    setForm({...form, title:newTitle})
}
const onPromptChange = (newPrompt:string) => {
    setForm({...form, prompt:newPrompt})
}

const handleSurpriseMe = () => {
    const surprisePrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt: surprisePrompt})
}

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create 
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Create imaginative and stunning images via DALL-E AI and share them with the world!
        </p>
      </div>

      <form className="mt-16 max-w-3xl">
        {/* name field */}
        <FormField
        value={form.title}
        onChange={onTitleChange}

        labelName="Title"
        type="text"
        name="title"
        placeholder="Enter title"

        isSurpriseMe={false}
        />

        {/* prompt field */}
        <FormField
        value={form.prompt}
        onChange={onPromptChange}

        labelName="Prompt"
        type="text"
        name="prompt"
        placeholder="Enter prompt"

        isSurpriseMe={true}
        handleSurpriseMe={handleSurpriseMe}
        />


        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo 
            ? (
                <img src={form.photo} alt={form.prompt} 
                className="w-full h-full object-contain"/>
            ) 
            : (
                <img src={preview} alt="preview" 
                className="w-9/12 h-9/12 object-contain opacity-40"/>
            )}

            {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Preloader></Preloader>
                </div>
            )}
        </div>

        <button type="button"
        onClick={generateImage}
        className="text-white bg-green-700 font-medium
        rounded-md text-sm w-full sm:w-auto px-5 py-2.5
        text-center">
        {generatingImg ? 'Generating...' : 'Generate'}
        </button>

        <div className="mt-10">
            <p className="mt-2 text-[#666e75] text-[14px]">Share your image with the community!</p>
            <button type="submit" className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                {loading ? 'Sharing...' : 'Share'}
            </button>
        </div>

      </form>

    </section>
  );
};

export default CreatePost;
