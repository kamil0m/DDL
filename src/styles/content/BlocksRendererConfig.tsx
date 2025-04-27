// This json file allows to add Windtail classes to elements rendered with BlockRenderer

export const blocks = {
  heading: ({ children, level }: { children: React.ReactNode; level: number }) => {
    switch (level) {
      case 1:
        return (
          <h1 className="card__title text-center width-full text-white-900 text-2xl font-bold">
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className="card__title text-center width-full text-white-900 text-xl font-bold">
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className="card__title text-center width-full text-white-900 text-lg font-bold">
            {children}
          </h3>
        );
    }
    return React.createElement(`h${level}`, {}, children);
  },
};