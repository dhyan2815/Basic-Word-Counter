const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
    const text = input.value;

    // Reset counts if text is empty
    if (text === "") {
        resetCounts();
        return;
    }

    // Count characters including all characters, including spaces and newlines.
    characterCount.innerText = text.length;

    // Count words (split by whitespace and filter out empty strings)
    const wordsArray = text.split(/\s+/).filter((word) => word.length > 0);
    wordCount.innerText = wordsArray.length;

    // Count sentences (using common sentence-ending punctuation)
    const sentenceArray = text.match(/[^.!?]*[.!?]/g) || [];
    sentenceCount.innerText = sentenceArray.filter((sentence) => sentence.trim().length > 0).length;

    // Count paragraphs (split by double newlines or a single newline for simplicity)
    const paragraphArray = text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0);
    paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
    wordCount.innerText = characterCount.innerText = sentenceCount.innerText = paragraphCount.innerText = "0";
}

input.addEventListener("input", updateCounts);