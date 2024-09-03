interface MircoConfig {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

const configs: MircoConfig[] = [
  {
    name: "vueApp",
    entry: "//localhost:5173",
    container: "#vue",
    activeRule: "/vue",
  },
];

export default configs;
