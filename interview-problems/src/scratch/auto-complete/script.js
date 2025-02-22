const suggestions = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grape",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Blueberry"
  ];
  
  function showSuggestions(value) {
    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";
  
    if (value.length === 0) {
      return;
    }
  
    const filteredSuggestions = suggestions.filter(item => 
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    console.log("hello",filteredSuggestions);
    
  
    filteredSuggestions.forEach(item => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = item;
      suggestionItem.onclick = () => selectSuggestion(item);
      suggestionsBox.appendChild(suggestionItem);
    });
  }
  
  function selectSuggestion(value) {
    document.getElementById("search").value = value;
    document.getElementById("suggestions").innerHTML = "";
  }
  