export type FeatureSectionModel = {
  id: string;
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc: string;
};

export const feature1: FeatureSectionModel = {
  id: "feature-1",
  title: "Overview of your subscriptions",
  description:
    "See all active subscriptions in one clean list. Instantly check your services, renewal dates, and monthly totals without jumping between apps.",
  imageSrc: "/iphone_main_phone_view.png",
};

export const feature2: FeatureSectionModel = {
  id: "feature-2",
  title: "Get insights of your spendings",
  description:
    "Understand recurring costs with clear spending insights. Spot expensive services, compare categories, and make smarter monthly budget decisions.",
  reverse: true,
  imageSrc: "/iphone_main_phone_view.png",
};

export const feature3: FeatureSectionModel = {
  id: "feature-3",
  title: "Calendar view for upcoming payments",
  description:
    "Know exactly when each payment is due. Plan ahead with a clear calendar timeline and avoid surprise subscription charges.",
  imageSrc: "/iphone_main_phone_view.png",
};

export const featureSections: FeatureSectionModel[] = [feature1, feature2, feature3];

