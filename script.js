        
        window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
        })

        function MinecraftCharacters() {
      window.location.href = "MC_Characters.html";
        }

        function MinecraftHistory() {
            window.location.href = "MC_History.html";
        }

        function MinecraftBlocks() {
            window.location.href = "MC_Blocks.html";
        }
        
        function PlaceBlockFunction() {
          alert("You placed a Block!");
        }
        
