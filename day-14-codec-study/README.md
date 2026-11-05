# Codec Does Matter: study studio

A paper-specific study site for a five-question short-response quiz on Monday, November 9, 2026. Based on the user's supplied nine-page AAAI-25 paper, Ye et al., “Codec Does Matter: Exploring the Semantic Shortcoming of Codec for Audio Language Model,” pp. 25697–25705. Official publication: https://doi.org/10.1609/aaai.v39i24.34761

Open `dist/index.html` directly or serve `dist/`. No build, dependencies, API keys, external grading service, or login is implemented by the app itself. The hosted study site is public: https://isabel-codec-study.isabel-zulawski.chatgpt.site/

## Study flow

- Learn: six concise lessons on motivation, architecture, RVQ/SpeechTokenizer, speech evidence, general audio, and limitations. Interact with a schematic, toy residual quantizer, and stage-specific WER chart. Write recall answers, compare with a reference, and mark concepts for review.
- Quiz: two alternating sets of five short responses. References remain hidden until all five questions have an attempt. Self-check against three criteria per response. There is no automatic semantic grading and the questions do not predict the professor's exam.
- Review: argument outline, key results, glossary, and a short plan through Monday.

Drafts, self-checks, and up to five previous quiz attempts save only in the current browser when localStorage is available. Export answers as a text file for backup. Quiz answers are never uploaded. The supplied PDF is bundled with page links for source checking; the appendix mentioned by the paper is absent from this supplied file.

## Accuracy notes

Figure 1 and Tables 1–6 were checked against rendered PDF pages. The study guide distinguishes codec versus LM training data; AR-only versus AR+NAR metrics; matched X-Codec-HuBERT versus differently trained WavLM; waveform reconstruction versus generation; predicted UTMOS versus human ratings; phonetic discrimination versus broader semantic understanding. The RVQ numerical example is explicitly a teaching toy, not learned codec data. Suggested follow-up experiments are labeled as critique, not paper findings. Basic ABX context was checked against the original Schatz et al. ISCA work: https://www.isca-archive.org/interspeech_2013/schatz13_interspeech.html

## Verification

Syntax checks; content assertions for six lessons, two sets of five questions, three rubric items each, valid PDF page references, and numerical WER reduction. Browser checks: lesson navigation, interactive pipeline, recall save/reveal, five-answer submission gate, all five reference answers, manual rubric updates, and restoration after reload. Export is a plain-text Blob with saved lesson and quiz responses.
