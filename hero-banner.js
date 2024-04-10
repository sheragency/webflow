
function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false
    }
  });

  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  var border = 1;
  var radius = 20;


function getRandomPosX() {
  var container = document.getElementById("hero");
  var containerWidth = container.clientWidth;



  var margin = 10; 


  var safeSpawnWidth = containerWidth - (margin * 2);


  var randomPosX = Math.random() * safeSpawnWidth + margin;

  return randomPosX;
}


 
  var tagM1 = Bodies.rectangle(getRandomPosX(), 30, 168, 48, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b730183b47ae999a5_PerBlue.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  
  

  
  var tagM2 = Bodies.rectangle(getRandomPosX(), 30, 221, 48, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1ba30ce24776ab8a73_Natalie%20Cooks.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  
  var tagM3 = Bodies.rectangle(getRandomPosX(), 30, 159, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b0a9695778645ca5d_Hytera.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
 
  
    var tagM4 = Bodies.rectangle(getRandomPosX(), 30, 164, 48, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b0731b8a5f63f2c92_Liquillo.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagM5 = Bodies.rectangle(getRandomPosX(), 30, 195, 48, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1bf83a204af36ed39d_Austin%20Eats.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  
  var tagM6 = Bodies.rectangle(getRandomPosX(), 30, 174, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b8cc6eda5f57a05d1_BlushPix.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );

    var tagM7 = Bodies.rectangle(getRandomPosX(), 30, 206, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b97366c3183f75e8e_IMS%20Doctors.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM8 = Bodies.rectangle(getRandomPosX(), 30, 203, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b281d8505fe79c862_Spike%20Neuro.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );

    var tagM9 = Bodies.rectangle(getRandomPosX(), 30, 256, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1bf4edd863aa249127_WP%20Capital%20Group.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );

    var tagM10 = Bodies.rectangle(getRandomPosX(), 30, 222, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1b0ce8bd00972beedb_Basil%20Holdings.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );

    var tagM11 = Bodies.rectangle(getRandomPosX(), 30, 167, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1ae881b96d5694a678_Virovek.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );

    var tagM12 = Bodies.rectangle(getRandomPosX(), 30, 234, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a281d8505fe79c825_Beyond%20Surplus.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  


    var tagM13 = Bodies.rectangle(getRandomPosX(), 30, 287, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a46ce6f3c414d8cc1_Structure%20Landscapes.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM14 = Bodies.rectangle(getRandomPosX(), 30, 180, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1aa30ce24776ab89e7_Violumas.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM15 = Bodies.rectangle(getRandomPosX(), 30, 298, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a46ce6f3c414d8cbb_Full%20Bloom.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  

  var tagM16 = Bodies.rectangle(getRandomPosX(), 30, 212, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1aee89c7d8d6095f66_Easy%20Finance.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM17 = Bodies.rectangle(getRandomPosX(), 30, 180, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a2ebdb32f8e45f38f_GeoCivix.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );



  var tagM18 = Bodies.rectangle(getRandomPosX(), 30, 211, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1aae102e055d06a593_Wise%20Pelican.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM19 = Bodies.rectangle(getRandomPosX(), 30, 221, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a0ce8bd00972beea3_Forno%20Piombo.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM20 = Bodies.rectangle(getRandomPosX(), 30, 261, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a8556a9f5df366a73_Core%20Commissions.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


    var tagM21 = Bodies.rectangle(getRandomPosX(), 30, 282, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a0731b8a5f63f2c11_Student%20Sections%20Com.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );



  var tagM22 = Bodies.rectangle(getRandomPosX(), 30, 201, 48,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615ae1a2c332803f528a35f_CrewChiefs.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );


  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tagM1,
    tagM2,
    tagM3,
    tagM4,
    tagM5,
    tagM6,
    tagM7,
    tagM8,
    tagM9,
    tagM10,
    tagM11,
    tagM12,
    tagM13,
    tagM14,
    tagM15,
    tagM16,
    tagM17,
    tagM18,
    tagM19,
    tagM20,
    tagM21,
    tagM22

 
  ]);

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });
  

var hoverContainer = document.createElement('div');
hoverContainer.className = 'hover-container';
hoverContainer.style.position = 'absolute';
hoverContainer.style.display = 'none'; 


hoverContainer.style.zIndex = '1000'; 
  hoverContainer.style.display = 'flex';
    hoverContainer.style.flexWrap = 'wrap';
   hoverContainer.style.width = '319px';
   hoverContainer.style.height = '222px';
containerElement.appendChild(hoverContainer);


var image = document.createElement('img');
image.style.width = '100%'; 
  image.style.height = '149px';
hoverContainer.appendChild(image); 

var link = document.createElement('a');
hoverContainer.appendChild(link);


Matter.Events.on(mouseConstraint, 'mousemove', function(event) {
  var mousePosition = event.mouse.position;
  var bodies = Matter.Composite.allBodies(engine.world);
  var bodyUnderMouse = Matter.Query.point(bodies, mousePosition)[0];

  if (bodyUnderMouse === tagM1) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d1154ad24032bbb427_Perblue-thumb.jpg'; 
    link.href = 'https://perblue.com/';
    link.textContent = 'PerBlue'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }
  
   if (bodyUnderMouse === tagM2) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d17c30dbef285489af_Natalie-Cooks-Thumb.jpg'; 
    link.href = 'https://perblue.com/';
    link.textContent = 'Natalie Cooks'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }
  
     if (bodyUnderMouse === tagM3) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d09083f14a52b1a1bd_Hytera-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Hytera'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

 if (bodyUnderMouse === tagM4) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d1a10fcae840a96eee_Liquillo-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Liquillo'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

 if (bodyUnderMouse === tagM5) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d001cc6c0d465fa658_Austin-Eats-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Austin Eats'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }


 if (bodyUnderMouse === tagM6) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d1504b51155210435e_BlushPix-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'BlushPix'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM7) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d0ad0eb745d626725d_IMS-Doctors-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'IMS Doctors'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }


 if (bodyUnderMouse === tagM8) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d18131e6d9846dce24_Spike-Neuro-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Spike Neuro'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }


 if (bodyUnderMouse === tagM9) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d1801a7a62d2e74b49_Wealth-Partners-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'WP Capital Group'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

 if (bodyUnderMouse === tagM10) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d0d04aea8005310d98_Basil-Holdings-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Basil Holdings'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM11) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d19473134aa62facbf_Virovek-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Virovek'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM12) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4cfc329fbddd88e3629_Beyond-Surplus-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Beyond Surplus'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM13) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d1df222c2d1a6963e0_StructureLand-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Structure Landscapes'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM14) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d10ae55848f402b5e4_Violumas-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Violumas'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }


 if (bodyUnderMouse === tagM15) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d058d064fcf4eb3e92_FullBloom-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Full Bloom Greenhouse'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM16) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d0b6efe8642ccb886a_Easy-Finance-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Easy Finance'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM17) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d008bf9e8df799e01f_Geocivix-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Geocivix'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }


 if (bodyUnderMouse === tagM18) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d0e2728e87486b7d71_Wise-Pelican-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Wise Pelican'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM19) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d058ea419bee75dde9_Forno-Piombo-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Forno Piombo'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM20) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d2e809744adc443582_Core-Commissions-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'Core Commissions'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

 if (bodyUnderMouse === tagM21) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615b4d26493f93f28ce6f38_Student-SectionCom-Thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'StudentSections.com'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

   if (bodyUnderMouse === tagM22) {
    image.src = 'https://uploads-ssl.webflow.com/66133a38093a875be8ff5474/6615989bb0b8b660513a46b3_crew-chiefs-thumb.jpg'; 
    link.href = 'https://crewchiefs.com/';
    link.textContent = 'CriewChiefs'; 
    var additionalSpace = 250; 
    hoverContainer.style.top = (bodyUnderMouse.position.y - hoverContainer.offsetHeight - additionalSpace) + 'px';
    hoverContainer.style.left = (bodyUnderMouse.position.x -  159.5) + 'px';
    hoverContainer.style.display = 'flex';
  }

});
  
   



document.addEventListener('mousemove', function(event) {
  if (!event.target.closest('.hover-container')) {
    var bodies = Matter.Composite.allBodies(engine.world);
    var isHoveringPill = bodies.some(body => body === tagM1 && body.isSensor);
    if (!isHoveringPill) {
      hoverContainer.style.display = 'none';
    }
  }
});


hoverContainer.addEventListener('mouseenter', function() {
  hoverContainer.style.display = 'flex'; 
});
hoverContainer.addEventListener('mouseleave', function() {
  hoverContainer.style.display = 'none';
});



  Engine.run(engine);

  Render.run(render);
}

var containerElement = document.querySelector(".tag-canvas");

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initSimulation();
      observer.disconnect();
    }
  });
}, {});

observer.observe(containerElement);

