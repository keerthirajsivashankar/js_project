// 3. DEFINE our custom tag's logic
console.log("Defining <user-profile-card>...");

// We create a class that 'extends' the basic HTMLElement
class UserProfileCard extends HTMLElement {
  // This 'connectedCallback' function runs AUTOMATICALLY
  // whenever the browser finds our tag in the HTML.
  connectedCallback() {
    console.log("User profile card connected!");

    // Get the data from the attributes on the tag
    const name = this.getAttribute("name") || "Guest User";
    const title = this.getAttribute("title") || "No Title";
    const avatar = this.getAttribute("avatar") || "https://placehold.co/100";

    // Use a template literal to build the component's HTML,
    // complete with all the Tailwind classes.
    this.innerHTML = `
            <div class="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6 transition-transform duration-300 hover:scale-105">
              
              <!-- Avatar -->
              <div class="flex-shrink-0">
                <img class="w-16 h-16 rounded-full border-4 border-blue-500" src="${avatar}" alt="${name}">
              </div>

              <!-- Info -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900">${name}</h2>
                <p class="text-gray-600">${title}</p>
              </div>

            </div>
          `;
  }
}

// 4. REGISTER our new tag with the browser.
// We're telling it: "When you see '<user-profile-card>',
// use the 'UserProfileCard' class to build it."
customElements.define("user-profile-card", UserProfileCard);
