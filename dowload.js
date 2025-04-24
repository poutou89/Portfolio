document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "CV.pdf";
    link.download = "CV.pdf";
    link.click();
  });