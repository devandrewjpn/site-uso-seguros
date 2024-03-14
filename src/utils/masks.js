// phoneFormat.js
function formatPhoneNumber(input) {
    const cleaned = ('' + input).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  
    return input;
  }
  
  export function applyPhoneFormat() {
    const phoneInputs = document.querySelectorAll('.phoneFormat');
  
    phoneInputs.forEach(input => {
      input.addEventListener('input', function () {
        const caretPosition = this.selectionStart;
        this.value = formatPhoneNumber(this.value);
        this.setSelectionRange(caretPosition, caretPosition);
      });
    });
  }

  