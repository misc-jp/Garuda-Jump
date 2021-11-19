/**
 * Registers a callback for a specified event, and unregisters it on scene's shutdown
 * @param scene 
 * @param event 
 * @param callback 
 * @param context 
 */
export function registerEventListener(scene: Phaser.Scene, event: string, callback: Function, context?: any) {
  scene.events.on(event, callback, context);
  scene.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
    scene.events.off(event, callback, context);
  });
}

export function registerKeyboardListener(
  scene: Phaser.Scene, 
  key: string, 
  event: 'keydown' | 'keyup', 
  callback: Function,
) {
  registerEventListener(scene, event, (e: KeyboardEvent) => {
    if (e.code === key) {
      callback();
    }
  });
}