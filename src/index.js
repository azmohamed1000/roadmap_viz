import dscc from '@google/dscc';
import RoadmapViz from './roadmapViz';

dscc.subscribe((data, env) => {
  const viz = new RoadmapViz('#container', data.tables.DEFAULT, env);
  viz.render();
});
