/**
 * Load a texture from a URL and apply to the model
 * @param {string} url - URL of the texture image
 */
loadTextureFromUrl: function(url)
{
    var self = this;
    var image = new Image();
    image.crossOrigin = "Anonymous";
    
    image.onload = function()
    {
        var w = this.width, 
            h = this.height;
    
        if ((w == 64 && (h == 64 || h == 32)) || true) // Allow non-standard sizes
        {
            self.model.setImage(this, w, h);
            self.justRender();
        }
        else
        {
            // Still try to apply even if not standard size
            console.warn("Non-standard skin size:", w, "x", h);
            self.model.setImage(this, w, h);
            self.justRender();
        }
    };
    
    image.onerror = function()
    {
        console.error("Failed to load texture from URL:", url);
        alert("Failed to load skin texture from the provided URL.");
    };
    
    image.src = url;
},
