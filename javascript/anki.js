  function highlightSection(id) {
          const section = document.getElementById(id);
          section.classList.add("highlight");
          setTimeout(() => {
            section.classList.remove("highlight");
          }, 1500);
        }
        function copyCallout() {
          const text = document.getElementById("callout-text").innerText;
          navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
          });
        }