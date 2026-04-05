export type EntityId = string; // Using string for flexibility and potential UUIDs

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Point, Size {}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number; // Alpha channel (0-1)
}

export interface Style {
  fillColor?: Color;
  strokeColor?: Color;
  strokeWidth?: number;
  opacity?: number; // 0-1
}

export interface Component {
  type: string; // e.g., "Position", "Sprite", "Behavior"
  [key: string]: any; // Allow arbitrary properties
}

export interface Entity {
  id: EntityId;
  components: Component[];
  tags?: string[]; // Optional tags for grouping/filtering
}

export interface System {
  name: string;
  update: (entities: Entity[], deltaTime: number) => void;
}

export interface Asset {
  id: string;
  url: string;
  type: 'image' | 'audio' | 'json' | 'text'; // Add more types as needed
  data: any; // The loaded asset data
}

export type AssetMap = { [id: string]: Asset };

export interface GameState {
  entities: Entity[];
  systems: System[];
  assets: AssetMap;
  input: InputState;
  deltaTime: number; // Time since last frame, in seconds
  running: boolean; // Indicates if the game loop should continue
}

export interface InputState {
  keys: { [key: string]: boolean }; // Key pressed state
  mouse: Point; // Mouse position
  mouseButtons: { [button: string]: boolean }; // Mouse button state (e.g., "left", "right")
}

export interface GameConfig {
  width: number;
  height: number;
  targetFps: number;
  assetList: { id: string; url: string; type: Asset['type'] }[];
  // Add more configuration options as needed
}

export interface Scene {
  name: string;
  entities: Entity[];
  systems: System[];
  onEnter?: (gameState: GameState) => void; // Called when the scene is loaded
  onExit?: (gameState: GameState) => void;  // Called when the scene is unloaded
}

export type SceneMap = { [name: string]: Scene };

export interface CoreEngineEvents {
  'assetLoaded': (assetId: string) => void;
  'sceneLoaded': (sceneName: string) => void;
  'error': (message: string) => void;
}