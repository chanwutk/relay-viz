interface RelayNode {
  id: number;
  text: string;
  level: number;
  x?: number;
}

interface RelayEdge {
  parent: number;
  child: number;
}
