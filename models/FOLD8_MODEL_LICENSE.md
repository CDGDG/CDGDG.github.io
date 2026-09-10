# Galaxy Z Fold8 3D Model

The 3D device model used by this concept is **SAMSUNG Galaxy Z Fold8** by
[zhe_kan on Sketchfab](https://sketchfab.com/3d-models/samsung-galaxy-z-fold8-dfbcbd3143e644608c758edaa0289db3).

It is licensed under
[CC Attribution-NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Changes made for this portfolio concept: the source scene was reduced to the
separately authored closed device. Its original chassis, recessed hinge cover and
end caps are retained; the closed transforms are undone to create an animatable
rest pose. The browser restores the source closed transforms and interpolates the
opening motion (the source contains static models, not an animation).
Original custom normals are preserved. Body materials are recolored with adjusted
metallic, roughness and clearcoat values. The adapted model remains under the same
CC BY-NC-SA 4.0 license.

Rebuild `fold8-white-rigged.glb` with Blender:

```sh
blender --background --python scripts/prepare_fold8_model.py -- SOURCE.glb public/models/fold8-white-rigged.glb
```
