new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "images/sma1.jpeg",
            img2: "images/sma2.jpeg",
            img3: "images/sma3.jpeg",
            title: "YOU AND I",
            isOpen: false,
          },
          {
            img1: "images/YOGYA1.jpg",
            img2: "images/YOGYA2.HEIC",
            img3: "images/YOGYA3.HEIC",
            title: "YOGYAKARTA",
            isOpen: false,
          },
          {
            img1: "images/ijen1.HEIC",
            img2: "images/ijen2.jpeg",
            img3: "images/ijen3.HEIC",
            title: "KAWAH IJEN",
            isOpen: false,
          },
          {
            img1: "images/canggu1.HEIC",
            img2: "images/canggu2.jpeg",
            img3: "images/canggu3.HEIC",
            title: "CANGGU",
            isOpen: false,
          },
          {
            img1: "images/kinta1.HEIC",
            img2: "images/kinta2.jpeg",
            img3: "images/kinta3.HEIC",
            title: "KINTAMANI",
            isOpen: false,
          },
          {
            img1: "images/bali1.HEIC",
            img2: "images/bali2.HEIC",
            img3: "images/bali3.HEIC",
            title: "LA BRISA & BEDUGUL",
            isOpen: false,
          },
          {
            img1: "images/uluwatu1.HEIC",
            img2: "images/uluwatu2.jpeg",
            img3: "images/uluwatu3.HEIC",
            title: "ULUWATU BEACH",
            isOpen: false, 
          },
          {
            img1: "images/penida1.HEIC",
            img2: "images/penida2.jpeg",
            img3: "images/penida3.HEIC",
            title: "PENIDA ISLAND",
            isOpen: false, 
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });