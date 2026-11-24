# Campus Chaos 3D

A browser-based Three.js campus exploration game built with Vite. Its site outline is based on the GGSIPU East Delhi Campus educational parcel in [OpenStreetMap way 1186490427](https://www.openstreetmap.org/way/1186490427). OpenStreetMap data is © OpenStreetMap contributors, made available under the Open Database License (ODbL).

The featured building's facade is also informed by the [Google Maps USDI place photo](https://www.google.com/maps/place/USDI+University+School+of+Design+and+Innovation+IP+University/@28.664394,77.2996857,18z) and the [CollegeDunia GGSIPU East Delhi Campus photo gallery](https://collegedunia.com/university/64663-ggsipu-east-delhi-campus-new-delhi/gallery). The Google Maps photo is labeled USDI and shows a pale multi-storey academic facade, a projecting blue-green glazed volume, and a large dark cantilevered canopy. These images are visual references only; no photographs are bundled or used as game textures. The [Google Maps satellite view](https://www.google.com/maps/@28.664394,77.2996857,18z/data=!3m1!1e3) was inspected for broad campus context, but does not establish exact internal measurements or every building/road position.

The [GGSIPU East Delhi Campus Google Maps photo](https://www.google.com/maps/place/Guru+Gobind+Singh+Indraprastha+University+-+East+Delhi+Campus/@28.6658641,77.3030509,18z) is a Jan 2024 elevated campus view. Together with satellite imagery, it supports a western circular, radially detailed roof landmark and curving internal circulation. The scene includes stylized versions of those forms. Their game coordinates and the remaining internal building layout are still approximate, not a surveyed reconstruction.

## Run locally

From PowerShell in this project folder:

```powershell
npm install
npm run dev
```

Open the localhost URL printed by Vite (normally `http://localhost:5173`). To verify a production bundle:

```powershell
npm run build
npm run preview
```

## Controls

- **W A S D** or arrow keys: move
- **Space**: jump
- **Shift**: sprint
- Approach your pearl-and-teal two-seat supercar parked beside the main gate and press **E** (or the HUD button) to get in. While driving, use **W/S** to accelerate or reverse, **A/D** to steer, hold **Shift** for a high-speed boost, and **E** to get out. Press **V** while driving to switch views and see the cockpit.
- Approach the enlarged Bullet motorcycle beside the main gate and press **E** (or its HUD button) to ride. Use **W/S** to accelerate or reverse, **A/D** to steer, and **E** to get off. Its locally generated puttering engine sound starts when mounted and rises in pitch as you ride.
- Press the on-screen **Pat-pat sound · Full volume** button for a loud, locally generated motorcycle rev sound.
- You can now walk or drive through the main gate and continue along the perimeter highway. Campus walls still prevent crossing the boundary away from the gate; building collisions and the edge of the playable ground remain active.
- The front entrance now has a larger, sensor-triggered sliding gate and a top sign reading “GURU GOBIND SINGH UNIVERSITY.” Highway traffic cars are larger and include visible windows, bumpers, lights, tires, and metallic alloy wheels.
- Two uniformed guards now patrol short routes beside the entrance, walk with visible arm/leg movement, and turn to inspect and signal when the player or their car approaches. A small security booth with a roof, windows, door, and sign sits next to the gate.
- **Mouse**: rotate the third-person camera (click the world to capture the pointer)
- **Scroll wheel**: zoom
- **V**: switch between third-person and first-person
- **M**: toggle the overhead campus view
- **E**: activate robotics beacons or shoot a basketball
- **Esc**: pause and release the pointer

The touch buttons are shown on narrow screens. Progress (coins, XP, completed modes, and best times) is stored in this browser's local storage.

## Included gameplay

- **Campus Explorer:** roam freely and gather three welcome coins.
- **Parkour Challenge:** jump through five checkpoints in order.
- **Campus Race:** pass six checkpoints before the 2:30 timer expires.
- **Treasure Hunt:** collect eight coins around the mapped site.
- **Robotics Challenge:** activate three lab beacons in order with **E**.
- **Basketball Challenge:** reach the court, face the hoop, and shoot with **E** three times before the 90-second timer expires.
- Campus life includes 16 stylized student NPCs, two security staff with visible ID badges, a guard booth, four ambient parked cars, six bicycles, and an enlarged, rideable black Bullet Electra-style classic motorcycle on its own yellow-lined display bay beside the main gate. The motorcycle has straight wheels, a compact fuel tank, a visible seat, a larger detailed engine, a bright headlight, collision-aware riding controls, and a locally generated puttering engine sound while mounted. Exhaust flames appear while accelerating at top speed. Your larger pearl-and-teal GT drift supercar is parked nearby and can be driven. Its open cockpit reveals two tan leather bucket seats, a steering wheel, and digital displays; the exterior features wide wheel arches, sculpted body lines, sharp bright LED lights, side skirts, a front splitter and canards, rear diffuser fins, twin metal exhausts, and a rear wing. The character scales with the car when seated. NPCs are ambient scene characters and do not block movement; press **E** near campus security for a safety reminder.
- A separate four-lane perimeter highway runs outside the campus boundary, with lane markings, animated traffic lights, looping traffic, and planted tree verges. It is an illustrative game addition, not a verified survey of the surrounding real streets.
- Outside the highway, a ring of stylized multi-storey city buildings fills the previously empty map edges on all sides. They include repeated window facades and roof structures; the entrance corridor remains clear, and buildings block walking/driving through their footprints.
- All five campus buildings have wide, clear ground-floor entrances with sensor-triggered automatic sliding glass doors, flush threshold pads, and walkable furnished interiors. The player character is slightly smaller to fit naturally through the entrances. Interiors include robotics lab workstations, classroom desks, a rotunda reception and waiting area, and library shelves, reading tables, and circulation desk; interior walls and furnishings are solid to walking and driving.
- A grand private mansion estate has an enlarged stone-and-glass residence with a walk-in front entrance and a furnished, lit ground-floor interior, including a wall-mounted television, landscape paintings, lounge seating, dining set, bookcase, piano, patterned carpets throughout its rooms, and an interior security guard. Its front staircase descends from the porch, while framed windows, a columned triangular pediment, broad balconies, rooftop dormers, and entry lighting complete the facade. The landscaped lawn, full-size swimming pool, paved deck, rear garden path, stone-and-railing perimeter boundary, open driveway gate, rows of trees, and a marked helipad with a human-scale flyable helicopter complete the grounds. Press **E** by the helicopter to board; **W/S** fly, **A/D** turn, **Space/R** climb, **Ctrl/F** descend, and **E** exits only after landing. The helicopter banks and pitches while flying and can climb high above the campus. It sits beyond the southern highway in open ground, away from campus; the mountain backdrop is cleared behind the estate. Its placement is illustrative; mansion walls, furniture, wings, and estate boundaries block movement where appropriate.
- The world map shows your position, your supercar, helicopter, and the mansion; vehicle markers follow their vehicles.
- Distant stylized mountain ranges form a backdrop behind the exterior high-rise district, with a clear view behind the mansion.
- The HUD's **People** and **Vehicles** buttons toggle those scene groups, while **Campus info** opens the campus-life and approximation panel.
- Campus asphalt routes now use finer connected surfaces, subtle asphalt/concrete textures, center dashes on wider roads, and pedestrian crossing markings at key junctions. Road and footpath meshes share the same top height, including around corners, to avoid a step at their transitions.

Challenge completion awards XP and coins. The game also records and displays achievements for the first campus coin, coin collecting, and the first completed challenge. Use the pause panel to restart a challenge or return to mode selection. Ambient sound is generated locally by the browser; it does not load external audio assets. Day/night and rain are optional visual effects.

## Accuracy and known approximations

The OSM source supplies a campus parcel boundary and describes the East Delhi campus as housing USAR and USDI. The Google Maps building photo is labeled USDI, not USAR. The campus-wide photo and satellite imagery support broad campus context and some recognizable shapes, but not a fully georeferenced internal site plan. Therefore:

- The parcel outline is a rounded, locally scaled rendering of the mapped boundary; it is not a surveyed or dimensionally certified site plan.
- Building footprints, the USAR-inspired academic block, other campus buildings, the provisional south-side gate, roads, parking, landscaping, and the internal arrangement are game approximations. They must not be read as verified real-world positions.
- The featured academic block reflects visible photo cues—pale wings, a projecting blue-green glazed volume, supporting columns, and a dark cantilevered canopy—but its exact dimensions, school identity, and in-game position have not been verified.
- The circular-roof landmark and loop road are visual approximations guided by the aerial references. Other building footprints, the internal campus arrangement, and exact road geometry remain approximate; imagery has not been used to claim surveyed positions or measurements.
- Roads and sidewalks are generated as connected surface unions from the shared route centerlines. Their meshes are clipped to the mapped campus parcel and cleared from building footprints; building positions and routes were adjusted to avoid the obvious road/building overlaps. The route centerlines now remain within the parcel, but the layout is still an approximation, not a georeferenced or surveyed plan.
- The four-lane outer highway deliberately lies beyond the campus parcel. Its exact position and neighboring road connections are illustrative rather than verified from a detailed surrounding-road survey.
- The high-rise skyline is decorative, procedurally placed game scenery. It does not claim to represent surveyed neighboring buildings.
- The mountain range is a decorative, stylized horizon backdrop and is not a real geographic feature of the campus area.
- The mansion and driveway are additional fictional game scenery, not part of a verified campus or neighborhood plan.
- A small landscaped lake and access spur have been added to an open campus area; the spur joins the existing campus route network, which runs to the main gate and perimeter highway. The lake placement is an illustrative game addition, not a verified campus water feature.
- No satellite screenshot or ground-level campus photo is bundled in the project.

To improve the reconstruction, provide a north-oriented satellite/overhead screenshot with the campus boundary and visible building labels, plus ground-level photos of the entrance/gate and USAR building (front, side, and entrance). Those references would allow the internal road/building coordinates and facade details to be corrected rather than guessed.
