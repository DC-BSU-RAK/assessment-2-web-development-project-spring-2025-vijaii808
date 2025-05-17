// Scroll the department slider left or right
function scrollSlider(direction) {
    const slider = document.getElementById('departmentSlider');
    const scrollAmount = slider.clientWidth * 0.8;
    slider.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Callback form submission logic
function submitCallback() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name && phone) {
        document.getElementById("callbackForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "block";
    } else {
        alert("Please enter your name and mobile number.");
    }
}

// Nutrient information logic
const nutrientInfo = {
    "protein": "Protein is essential for building and repairing tissues. It's also crucial for enzymes, hormones, and overall muscle development.",
    "carbohydrates": "Carbohydrates are your body’s main source of energy. Whole grains, fruits, and vegetables offer long-lasting fuel and fiber.",
    "fats": "Healthy fats like omega-3s support brain health, hormone production, and nutrient absorption.",
    "vitamin c": "Vitamin C boosts the immune system, helps in wound healing, and acts as a powerful antioxidant.",
    "iron": "Iron is vital for producing hemoglobin, which carries oxygen in your blood. A deficiency may lead to anemia.",
    "calcium": "Calcium is key to strong bones and teeth. It also plays a role in muscle function and heart rhythm."
};

function showNutrientInfo() {
    const input = document.getElementById("nutrientInput").value.trim().toLowerCase();
    const outputBox = document.getElementById("nutrientOutput");

    if (nutrientInfo[input]) {
        outputBox.innerHTML = `<strong>${capitalize(input)}</strong>: ${nutrientInfo[input]}`;
        outputBox.classList.add("show");
    } else {
        outputBox.innerHTML = "Sorry, we don't have information on that nutrient. Try another.";
        outputBox.classList.add("show");
    }
}

function selectNutrientInfo() {
    const selected = document.getElementById("nutrientSelect").value.toLowerCase();
    const outputBox = document.getElementById("nutrientOutput");

    if (nutrientInfo[selected]) {
        outputBox.innerHTML = `<strong>${capitalize(selected)}</strong>: ${nutrientInfo[selected]}`;
        outputBox.classList.add("show");
    } else {
        outputBox.innerHTML = "";
        outputBox.classList.remove("show");
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
