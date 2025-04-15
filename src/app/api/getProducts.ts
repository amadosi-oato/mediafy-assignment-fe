export type GetProductsResponse = {
  data: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    tags: string[];
  }[];
};

export const getProducts = async (): Promise<GetProductsResponse> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 5968,
            name: "Sample Product 1962",
            price: 30.73,
            description: "Description for Sample Product 1962",
            image: "https://picsum.photos/id/326/500/500",
            tags: ["favoriter", "hemma"],
          },
          {
            id: 5969,
            name: "Plantera Träd 6st & Få Mini Stud Earrings",
            price: 99.99,
            description:
              "När du väljer denna produkt planterar vi sex stycken träd via organisationen One Tree Planted.",
            image: "https://picsum.photos/id/513/500/500",
            tags: ["accesoarer"],
          },
          {
            id: 5970,
            name: "Brödrost 750W Mattsvart",
            price: 100.31,
            description:
              "Champions brödrost ger gyllene rostat bröd för familjens lugna morgonstunder. Med 7 ställbara värmenivåer väljer du enkelt den nivå av rostning du önskar. Brödrosten har en stilren mattsvart design som är gjort för det skandinaviska köket",
            image: "https://picsum.photos/id/839/500/500",
            tags: ["favoriter", "magasin"],
          },
          {
            id: 5971,
            name: "Tryffelmix Lakrits Chili, Caramel Apelsin & Hallon Havssalt",
            price: 50.0,
            description:
              "Tryfflar från Gooslander 600g. Lakrits Chili (200g), Caramel Apelsin (200g) och Hallon Havssalt (200g).",
            image: "https://picsum.photos/id/536/500/500",
            tags: ["magasin"],
          },
        ],
      });
    }, 100)
  );
};
