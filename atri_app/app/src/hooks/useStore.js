import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Image1": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "5"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Chat%20bubble.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex1": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image12": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image13": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image14": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image15": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image16": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image17": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image18": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image19": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Image20": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Launch.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox11": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Next"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image22": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox12": {
      "styles": {
        "alignSelf": "center"
      },
      "custom": {
        "text": "Prev"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox13": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox14": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox15": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox16": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox17": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox18": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox19": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox20": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex18": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "TextBox21": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image32": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exclaim.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": 500
      },
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "height": "100%",
        "width": "1px",
        "backgroundColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "flexGrow": 1,
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex23": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "flexGrow": 1,
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "of"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "styles": {},
      "custom": {
        "text": "40"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "styles": {
        "color": "#6B7280"
      },
      "custom": {
        "text": "tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "styles": {},
      "custom": {
        "text": "1-10"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex25": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex26": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex27": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex30": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex31": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex32": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex33": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex35": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex36": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex37": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex39": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex40": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex41": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex42": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex43": {
      "styles": {
        "display": "inline-flex",
        "flexGrow": null,
        "alignItems": "center",
        "columnGap": "0.5rem"
      },
      "callbacks": {}
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "color": "#6B7280",
        "columnGap": "4px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "14px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingLeft": "4px",
        "paddingRight": "4px",
        "borderRadius": "2px",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderColor": "#6B7280"
      },
      "callbacks": {}
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "rowGap": "",
        "columnGap": "0.3rem",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "marginTop": "",
        "justifyContent": "flex-start"
      },
      "callbacks": {}
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex48": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex49": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex52": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex53": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex54": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "10px",
        "paddingBottom": "4px"
      },
      "callbacks": {}
    },
    "Image33": {
      "styles": {
        "height": "100%",
        "boxSizing": "border-box"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/homepage_wallpaper.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#1890ff",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "0px",
        "height": "0px"
      },
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex56": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex57": {
      "styles": {
        "display": "flex",
        "paddingTop": "10px",
        "flexDirection": "column"
      },
      "callbacks": {}
    },
    "TextBox27": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px"
      },
      "custom": {
        "text": "Tests"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex58": {
      "styles": {
        "display": "flex",
        "width": "",
        "flexGrow": null,
        "flexDirection": "row",
        "height": "100%",
        "flexShrink": 1,
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex59": {
      "styles": {
        "display": "flex",
        "width": "",
        "flexGrow": 1,
        "flexDirection": "column",
        "paddingLeft": "40px",
        "paddingRight": "80px",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex60": {
      "styles": {
        "display": "flex",
        "flexWrap": "wrap",
        "height": "100%",
        "paddingTop": "60px",
        "marginTop": "",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    }
  },
  "new_test": {
    "Image34": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/file_upload.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "styles": {
        "alignItems": "center",
        "color": "#1F2937",
        "backgroundColor": "#ffffff00",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "",
        "outline": "none",
        "fontWeight": 500,
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload Image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "color": "#6B7280",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "paddingTop": "",
        "marginTop": ""
      },
      "custom": {
        "text": "Input Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "styles": {
        "width": "600px",
        "height": "300px",
        "marginTop": "20px"
      },
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/run_test.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox30": {
      "styles": {},
      "custom": {
        "text": "Run Test"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Flex61": {
      "styles": {
        "display": "inline-flex",
        "columnGap": "10px",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "borderColor": "#1F2937",
        "borderStyle": "solid",
        "borderWidth": "1px",
        "borderRadius": "4px",
        "alignItems": "center",
        "cursor": "pointer"
      },
      "callbacks": {}
    },
    "Flex62": {
      "styles": {
        "display": "flex",
        "paddingTop": "40px",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex63": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex64": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#1E293B",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "color": "#ffffff",
        "marginTop": "20px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "paddingRight": "10px",
        "paddingLeft": "10px",
        "columnGap": "10px",
        "borderWidth": "",
        "borderStyle": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex65": {
      "styles": {
        "display": "flex",
        "width": "600px",
        "height": "",
        "alignItems": "center",
        "justifyContent": "center",
        "borderStyle": "solid",
        "borderColor": "#1F2937",
        "borderWidth": "1px",
        "borderRadius": "4px",
        "backgroundColor": "#F1F5F9",
        "marginTop": "20px",
        "minHeight": "300px"
      },
      "callbacks": {}
    },
    "TextBox31": {
      "styles": {
        "borderWidth": "",
        "fontSize": "24px",
        "fontFamily": "IBM Plex Serif",
        "fontWeight": 600,
        "marginTop": "80px",
        "paddingLeft": "",
        "paddingTop": ""
      },
      "custom": {
        "text": "Add new test"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex66": {
      "styles": {
        "display": "flex",
        "paddingTop": "60px",
        "boxSizing": "border-box",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "flexDirection": "column",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {},
  "new_test": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
