/**
 * Flagship Client Demo - AI Customer Support Assistant (RAG Simulator)
 */

document.addEventListener('DOMContentLoaded', () => {
  initFlagshipDemo();
});

function initFlagshipDemo() {
  renderDemoDocuments();
  renderSampleQueryButtons();
  initChatInputHandler();
}

function renderDemoDocuments() {
  const container = document.getElementById('demoDocsContainer');
  if (!container) return;

  const docs = PORTFOLIO_DATA.flagshipDemo.documents;
  container.innerHTML = docs.map(doc => `
    <div class="doc-item">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
        <span style="font-weight: 600; color: var(--text-primary);">📄 ${doc.title}</span>
        <span class="badge" style="font-size: 0.7rem;">${doc.category}</span>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono); max-height: 50px; overflow: hidden; text-overflow: ellipsis;">
        ${doc.content.substring(0, 120)}...
      </div>
    </div>
  `).join('');
}

function renderSampleQueryButtons() {
  const container = document.getElementById('sampleQueriesContainer');
  if (!container) return;

  const queries = PORTFOLIO_DATA.flagshipDemo.sampleQueries;
  container.innerHTML = queries.map(q => `
    <button onclick="submitDemoQuery('${q.replace(/'/g, "\\'")}')" class="sample-query-btn">
      💬 "${q}"
    </button>
  `).join('');
}

function initChatInputHandler() {
  const sendBtn = document.getElementById('demoSendBtn');
  const inputField = document.getElementById('demoInputField');

  if (sendBtn && inputField) {
    sendBtn.addEventListener('click', () => {
      const val = inputField.value.trim();
      if (val) {
        submitDemoQuery(val);
        inputField.value = '';
      }
    });

    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const val = inputField.value.trim();
        if (val) {
          submitDemoQuery(val);
          inputField.value = '';
        }
      }
    });
  }
}

function submitDemoQuery(queryText) {
  const chatHistory = document.getElementById('demoChatHistory');
  if (!chatHistory) return;

  // 1. Append User Message Bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = queryText;
  chatHistory.appendChild(userBubble);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // 2. Show Typing Indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble bot';
  typingIndicator.id = 'demoTypingIndicator';
  typingIndicator.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">🤖 Searching vector database & synthesizing response...</span>`;
  chatHistory.appendChild(typingIndicator);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // 3. Process Response after short delay
  setTimeout(() => {
    const indicator = document.getElementById('demoTypingIndicator');
    if (indicator) indicator.remove();

    const predefined = PORTFOLIO_DATA.flagshipDemo.predefinedResponses[queryText];

    let answerText = "";
    let sourceText = "";
    let confidenceText = "";
    let isFallback = false;

    if (predefined) {
      answerText = predefined.answer;
      sourceText = predefined.source;
      confidenceText = predefined.confidence;
      isFallback = predefined.isFallback;
    } else {
      // Dynamic matching or default fallback for custom user queries
      if (queryText.toLowerCase().includes("cost") || queryText.toLowerCase().includes("price")) {
        answerText = "AI Chatbot Setup starts at $1,500 one-time setup, with optional monthly maintenance at $250/month. Custom RAG enterprise builds start at $3,500.";
        sourceText = "Services & Pricing.pdf (Page 1)";
        confidenceText = "High (Grounded Match)";
      } else if (queryText.toLowerCase().includes("privacy") || queryText.toLowerCase().includes("data")) {
        answerText = "All customer documents are processed in isolated encrypted instances. Customer data is NEVER used for public AI model training.";
        sourceText = "Business FAQs & Support Policy.pdf (Page 1)";
        confidenceText = "High (Grounded Match)";
      } else {
        answerText = "I cannot confirm that specific detail from our business knowledge base documents. To get an exact answer, please get in touch directly with Teja using the contact form below.";
        sourceText = "System Grounded Fallback Triggered";
        confidenceText = "N/A (Information Unavailable)";
        isFallback = true;
      }
    }

    // 4. Append Bot Response Bubble
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble bot';
    botBubble.innerHTML = `
      <div>${answerText}</div>
      <div class="chat-citation-box">
        <span>📍 <strong>Source:</strong> ${sourceText}</span>
        <span style="margin-left: auto; color: ${isFallback ? 'var(--color-warning)' : 'var(--color-success)'};">
          ● ${confidenceText}
        </span>
      </div>
    `;
    chatHistory.appendChild(botBubble);
    chatHistory.scrollTop = chatHistory.scrollHeight;

  }, 600);
}
