const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
    const text = input.value;

    // Reset counts if text is empty
    if (text.trim() === "") {
        resetCounts();
        return;
    }

    // Count characters (includes spaces)
    characterCount.innerText = text.length;

    // Split by non-whitespace to count words
    const wordsArray = text.match(/\S+/g) || [];
    wordCount.innerText = wordsArray.length;

    // Split sentences by punctuation and ensure non-empty sentences
    const sentenceArray = text.match(/[^\s](.*?)[.!?](\s|$)/g) || [];
    sentenceCount.innerText = sentenceArray.length;

    // Split paragraphs by newlines and ensure non-empty paragraphs
    const paragraphArray = text.split(/\n+/).filter((p) => p.trim().length > 0);
    paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
    wordCount.innerText = characterCount.innerText = sentenceCount.innerText = paragraphCount.innerText = "0";
}

input.addEventListener("input", updateCounts);
