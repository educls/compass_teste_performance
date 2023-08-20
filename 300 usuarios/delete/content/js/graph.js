/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 307.0, "series": [{"data": [[0.0, 35.0], [0.1, 35.0], [0.2, 35.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 36.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 54.0], [1.1, 54.0], [1.2, 54.0], [1.3, 54.0], [1.4, 55.0], [1.5, 55.0], [1.6, 55.0], [1.7, 58.0], [1.8, 58.0], [1.9, 58.0], [2.0, 58.0], [2.1, 58.0], [2.2, 58.0], [2.3, 58.0], [2.4, 58.0], [2.5, 58.0], [2.6, 58.0], [2.7, 58.0], [2.8, 58.0], [2.9, 58.0], [3.0, 58.0], [3.1, 58.0], [3.2, 58.0], [3.3, 58.0], [3.4, 60.0], [3.5, 60.0], [3.6, 60.0], [3.7, 61.0], [3.8, 61.0], [3.9, 61.0], [4.0, 65.0], [4.1, 65.0], [4.2, 65.0], [4.3, 65.0], [4.4, 65.0], [4.5, 65.0], [4.6, 65.0], [4.7, 65.0], [4.8, 65.0], [4.9, 65.0], [5.0, 66.0], [5.1, 66.0], [5.2, 66.0], [5.3, 66.0], [5.4, 67.0], [5.5, 67.0], [5.6, 67.0], [5.7, 67.0], [5.8, 67.0], [5.9, 67.0], [6.0, 67.0], [6.1, 67.0], [6.2, 67.0], [6.3, 67.0], [6.4, 72.0], [6.5, 72.0], [6.6, 72.0], [6.7, 72.0], [6.8, 72.0], [6.9, 72.0], [7.0, 72.0], [7.1, 72.0], [7.2, 72.0], [7.3, 72.0], [7.4, 73.0], [7.5, 73.0], [7.6, 73.0], [7.7, 73.0], [7.8, 73.0], [7.9, 73.0], [8.0, 73.0], [8.1, 73.0], [8.2, 73.0], [8.3, 73.0], [8.4, 73.0], [8.5, 73.0], [8.6, 73.0], [8.7, 73.0], [8.8, 73.0], [8.9, 73.0], [9.0, 73.0], [9.1, 73.0], [9.2, 73.0], [9.3, 73.0], [9.4, 74.0], [9.5, 74.0], [9.6, 74.0], [9.7, 75.0], [9.8, 75.0], [9.9, 75.0], [10.0, 76.0], [10.1, 76.0], [10.2, 76.0], [10.3, 76.0], [10.4, 78.0], [10.5, 78.0], [10.6, 78.0], [10.7, 79.0], [10.8, 79.0], [10.9, 79.0], [11.0, 79.0], [11.1, 80.0], [11.2, 80.0], [11.3, 80.0], [11.4, 82.0], [11.5, 82.0], [11.6, 82.0], [11.7, 82.0], [11.8, 82.0], [11.9, 82.0], [12.0, 82.0], [12.1, 83.0], [12.2, 83.0], [12.3, 83.0], [12.4, 84.0], [12.5, 84.0], [12.6, 84.0], [12.7, 85.0], [12.8, 85.0], [12.9, 85.0], [13.0, 85.0], [13.1, 86.0], [13.2, 86.0], [13.3, 86.0], [13.4, 87.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 87.0], [13.9, 87.0], [14.0, 87.0], [14.1, 88.0], [14.2, 88.0], [14.3, 88.0], [14.4, 89.0], [14.5, 89.0], [14.6, 89.0], [14.7, 89.0], [14.8, 89.0], [14.9, 89.0], [15.0, 89.0], [15.1, 90.0], [15.2, 90.0], [15.3, 90.0], [15.4, 90.0], [15.5, 90.0], [15.6, 90.0], [15.7, 90.0], [15.8, 90.0], [15.9, 90.0], [16.0, 90.0], [16.1, 91.0], [16.2, 91.0], [16.3, 91.0], [16.4, 92.0], [16.5, 92.0], [16.6, 92.0], [16.7, 92.0], [16.8, 92.0], [16.9, 92.0], [17.0, 92.0], [17.1, 92.0], [17.2, 92.0], [17.3, 92.0], [17.4, 92.0], [17.5, 92.0], [17.6, 92.0], [17.7, 93.0], [17.8, 93.0], [17.9, 93.0], [18.0, 93.0], [18.1, 93.0], [18.2, 93.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 93.0], [18.7, 93.0], [18.8, 93.0], [18.9, 93.0], [19.0, 93.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 94.0], [19.5, 94.0], [19.6, 94.0], [19.7, 94.0], [19.8, 94.0], [19.9, 94.0], [20.0, 94.0], [20.1, 95.0], [20.2, 95.0], [20.3, 95.0], [20.4, 95.0], [20.5, 95.0], [20.6, 95.0], [20.7, 96.0], [20.8, 96.0], [20.9, 96.0], [21.0, 96.0], [21.1, 96.0], [21.2, 96.0], [21.3, 96.0], [21.4, 96.0], [21.5, 96.0], [21.6, 96.0], [21.7, 98.0], [21.8, 98.0], [21.9, 98.0], [22.0, 98.0], [22.1, 99.0], [22.2, 99.0], [22.3, 99.0], [22.4, 100.0], [22.5, 100.0], [22.6, 100.0], [22.7, 101.0], [22.8, 101.0], [22.9, 101.0], [23.0, 101.0], [23.1, 101.0], [23.2, 101.0], [23.3, 101.0], [23.4, 102.0], [23.5, 102.0], [23.6, 102.0], [23.7, 102.0], [23.8, 102.0], [23.9, 102.0], [24.0, 102.0], [24.1, 103.0], [24.2, 103.0], [24.3, 103.0], [24.4, 105.0], [24.5, 105.0], [24.6, 105.0], [24.7, 105.0], [24.8, 105.0], [24.9, 105.0], [25.0, 105.0], [25.1, 105.0], [25.2, 105.0], [25.3, 105.0], [25.4, 105.0], [25.5, 105.0], [25.6, 105.0], [25.7, 106.0], [25.8, 106.0], [25.9, 106.0], [26.0, 106.0], [26.1, 106.0], [26.2, 106.0], [26.3, 106.0], [26.4, 107.0], [26.5, 107.0], [26.6, 107.0], [26.7, 108.0], [26.8, 108.0], [26.9, 108.0], [27.0, 108.0], [27.1, 108.0], [27.2, 108.0], [27.3, 108.0], [27.4, 109.0], [27.5, 109.0], [27.6, 109.0], [27.7, 109.0], [27.8, 109.0], [27.9, 109.0], [28.0, 109.0], [28.1, 109.0], [28.2, 109.0], [28.3, 109.0], [28.4, 109.0], [28.5, 109.0], [28.6, 109.0], [28.7, 109.0], [28.8, 109.0], [28.9, 109.0], [29.0, 109.0], [29.1, 110.0], [29.2, 110.0], [29.3, 110.0], [29.4, 110.0], [29.5, 110.0], [29.6, 110.0], [29.7, 110.0], [29.8, 110.0], [29.9, 110.0], [30.0, 110.0], [30.1, 110.0], [30.2, 110.0], [30.3, 110.0], [30.4, 111.0], [30.5, 111.0], [30.6, 111.0], [30.7, 112.0], [30.8, 112.0], [30.9, 112.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 112.0], [31.4, 112.0], [31.5, 112.0], [31.6, 112.0], [31.7, 112.0], [31.8, 112.0], [31.9, 112.0], [32.0, 112.0], [32.1, 112.0], [32.2, 112.0], [32.3, 112.0], [32.4, 112.0], [32.5, 112.0], [32.6, 112.0], [32.7, 113.0], [32.8, 113.0], [32.9, 113.0], [33.0, 113.0], [33.1, 114.0], [33.2, 114.0], [33.3, 114.0], [33.4, 115.0], [33.5, 115.0], [33.6, 115.0], [33.7, 116.0], [33.8, 116.0], [33.9, 116.0], [34.0, 116.0], [34.1, 118.0], [34.2, 118.0], [34.3, 118.0], [34.4, 119.0], [34.5, 119.0], [34.6, 119.0], [34.7, 119.0], [34.8, 119.0], [34.9, 119.0], [35.0, 119.0], [35.1, 119.0], [35.2, 119.0], [35.3, 119.0], [35.4, 121.0], [35.5, 121.0], [35.6, 121.0], [35.7, 122.0], [35.8, 122.0], [35.9, 122.0], [36.0, 122.0], [36.1, 124.0], [36.2, 124.0], [36.3, 124.0], [36.4, 124.0], [36.5, 124.0], [36.6, 124.0], [36.7, 144.0], [36.8, 144.0], [36.9, 144.0], [37.0, 144.0], [37.1, 147.0], [37.2, 147.0], [37.3, 147.0], [37.4, 157.0], [37.5, 157.0], [37.6, 157.0], [37.7, 163.0], [37.8, 163.0], [37.9, 163.0], [38.0, 163.0], [38.1, 171.0], [38.2, 171.0], [38.3, 171.0], [38.4, 171.0], [38.5, 171.0], [38.6, 171.0], [38.7, 179.0], [38.8, 179.0], [38.9, 179.0], [39.0, 179.0], [39.1, 186.0], [39.2, 186.0], [39.3, 186.0], [39.4, 193.0], [39.5, 193.0], [39.6, 193.0], [39.7, 193.0], [39.8, 193.0], [39.9, 193.0], [40.0, 193.0], [40.1, 194.0], [40.2, 194.0], [40.3, 194.0], [40.4, 206.0], [40.5, 206.0], [40.6, 206.0], [40.7, 206.0], [40.8, 206.0], [40.9, 206.0], [41.0, 206.0], [41.1, 207.0], [41.2, 207.0], [41.3, 207.0], [41.4, 208.0], [41.5, 208.0], [41.6, 208.0], [41.7, 210.0], [41.8, 210.0], [41.9, 210.0], [42.0, 210.0], [42.1, 210.0], [42.2, 210.0], [42.3, 210.0], [42.4, 212.0], [42.5, 212.0], [42.6, 212.0], [42.7, 212.0], [42.8, 212.0], [42.9, 212.0], [43.0, 212.0], [43.1, 212.0], [43.2, 212.0], [43.3, 212.0], [43.4, 213.0], [43.5, 213.0], [43.6, 213.0], [43.7, 213.0], [43.8, 213.0], [43.9, 213.0], [44.0, 213.0], [44.1, 214.0], [44.2, 214.0], [44.3, 214.0], [44.4, 214.0], [44.5, 214.0], [44.6, 214.0], [44.7, 215.0], [44.8, 215.0], [44.9, 215.0], [45.0, 215.0], [45.1, 215.0], [45.2, 215.0], [45.3, 215.0], [45.4, 215.0], [45.5, 215.0], [45.6, 215.0], [45.7, 216.0], [45.8, 216.0], [45.9, 216.0], [46.0, 216.0], [46.1, 216.0], [46.2, 216.0], [46.3, 216.0], [46.4, 218.0], [46.5, 218.0], [46.6, 218.0], [46.7, 219.0], [46.8, 219.0], [46.9, 219.0], [47.0, 219.0], [47.1, 220.0], [47.2, 220.0], [47.3, 220.0], [47.4, 221.0], [47.5, 221.0], [47.6, 221.0], [47.7, 222.0], [47.8, 222.0], [47.9, 222.0], [48.0, 222.0], [48.1, 225.0], [48.2, 225.0], [48.3, 225.0], [48.4, 225.0], [48.5, 225.0], [48.6, 225.0], [48.7, 227.0], [48.8, 227.0], [48.9, 227.0], [49.0, 227.0], [49.1, 229.0], [49.2, 229.0], [49.3, 229.0], [49.4, 232.0], [49.5, 232.0], [49.6, 232.0], [49.7, 234.0], [49.8, 234.0], [49.9, 234.0], [50.0, 234.0], [50.1, 234.0], [50.2, 234.0], [50.3, 234.0], [50.4, 238.0], [50.5, 238.0], [50.6, 238.0], [50.7, 239.0], [50.8, 239.0], [50.9, 239.0], [51.0, 239.0], [51.1, 240.0], [51.2, 240.0], [51.3, 240.0], [51.4, 240.0], [51.5, 240.0], [51.6, 240.0], [51.7, 242.0], [51.8, 242.0], [51.9, 242.0], [52.0, 242.0], [52.1, 243.0], [52.2, 243.0], [52.3, 243.0], [52.4, 245.0], [52.5, 245.0], [52.6, 245.0], [52.7, 246.0], [52.8, 246.0], [52.9, 246.0], [53.0, 246.0], [53.1, 248.0], [53.2, 248.0], [53.3, 248.0], [53.4, 249.0], [53.5, 249.0], [53.6, 249.0], [53.7, 250.0], [53.8, 250.0], [53.9, 250.0], [54.0, 250.0], [54.1, 251.0], [54.2, 251.0], [54.3, 251.0], [54.4, 253.0], [54.5, 253.0], [54.6, 253.0], [54.7, 253.0], [54.8, 253.0], [54.9, 253.0], [55.0, 253.0], [55.1, 253.0], [55.2, 253.0], [55.3, 253.0], [55.4, 254.0], [55.5, 254.0], [55.6, 254.0], [55.7, 254.0], [55.8, 254.0], [55.9, 254.0], [56.0, 254.0], [56.1, 254.0], [56.2, 254.0], [56.3, 254.0], [56.4, 254.0], [56.5, 254.0], [56.6, 254.0], [56.7, 255.0], [56.8, 255.0], [56.9, 255.0], [57.0, 255.0], [57.1, 255.0], [57.2, 255.0], [57.3, 255.0], [57.4, 256.0], [57.5, 256.0], [57.6, 256.0], [57.7, 256.0], [57.8, 256.0], [57.9, 256.0], [58.0, 256.0], [58.1, 257.0], [58.2, 257.0], [58.3, 257.0], [58.4, 258.0], [58.5, 258.0], [58.6, 258.0], [58.7, 258.0], [58.8, 258.0], [58.9, 258.0], [59.0, 258.0], [59.1, 259.0], [59.2, 259.0], [59.3, 259.0], [59.4, 259.0], [59.5, 259.0], [59.6, 259.0], [59.7, 261.0], [59.8, 261.0], [59.9, 261.0], [60.0, 261.0], [60.1, 261.0], [60.2, 261.0], [60.3, 261.0], [60.4, 261.0], [60.5, 261.0], [60.6, 261.0], [60.7, 263.0], [60.8, 263.0], [60.9, 263.0], [61.0, 263.0], [61.1, 263.0], [61.2, 263.0], [61.3, 263.0], [61.4, 264.0], [61.5, 264.0], [61.6, 264.0], [61.7, 265.0], [61.8, 265.0], [61.9, 265.0], [62.0, 265.0], [62.1, 266.0], [62.2, 266.0], [62.3, 266.0], [62.4, 266.0], [62.5, 266.0], [62.6, 266.0], [62.7, 267.0], [62.8, 267.0], [62.9, 267.0], [63.0, 267.0], [63.1, 267.0], [63.2, 267.0], [63.3, 267.0], [63.4, 267.0], [63.5, 267.0], [63.6, 267.0], [63.7, 268.0], [63.8, 268.0], [63.9, 268.0], [64.0, 268.0], [64.1, 269.0], [64.2, 269.0], [64.3, 269.0], [64.4, 270.0], [64.5, 270.0], [64.6, 270.0], [64.7, 271.0], [64.8, 271.0], [64.9, 271.0], [65.0, 271.0], [65.1, 271.0], [65.2, 271.0], [65.3, 271.0], [65.4, 271.0], [65.5, 271.0], [65.6, 271.0], [65.7, 273.0], [65.8, 273.0], [65.9, 273.0], [66.0, 273.0], [66.1, 274.0], [66.2, 274.0], [66.3, 274.0], [66.4, 275.0], [66.5, 275.0], [66.6, 275.0], [66.7, 276.0], [66.8, 276.0], [66.9, 276.0], [67.0, 276.0], [67.1, 277.0], [67.2, 277.0], [67.3, 277.0], [67.4, 277.0], [67.5, 277.0], [67.6, 277.0], [67.7, 278.0], [67.8, 278.0], [67.9, 278.0], [68.0, 278.0], [68.1, 278.0], [68.2, 278.0], [68.3, 278.0], [68.4, 279.0], [68.5, 279.0], [68.6, 279.0], [68.7, 280.0], [68.8, 280.0], [68.9, 280.0], [69.0, 280.0], [69.1, 280.0], [69.2, 280.0], [69.3, 280.0], [69.4, 280.0], [69.5, 280.0], [69.6, 280.0], [69.7, 280.0], [69.8, 280.0], [69.9, 280.0], [70.0, 280.0], [70.1, 281.0], [70.2, 281.0], [70.3, 281.0], [70.4, 281.0], [70.5, 281.0], [70.6, 281.0], [70.7, 281.0], [70.8, 281.0], [70.9, 281.0], [71.0, 281.0], [71.1, 282.0], [71.2, 282.0], [71.3, 282.0], [71.4, 283.0], [71.5, 283.0], [71.6, 283.0], [71.7, 283.0], [71.8, 283.0], [71.9, 283.0], [72.0, 283.0], [72.1, 283.0], [72.2, 283.0], [72.3, 283.0], [72.4, 283.0], [72.5, 283.0], [72.6, 283.0], [72.7, 284.0], [72.8, 284.0], [72.9, 284.0], [73.0, 284.0], [73.1, 284.0], [73.2, 284.0], [73.3, 284.0], [73.4, 284.0], [73.5, 284.0], [73.6, 284.0], [73.7, 285.0], [73.8, 285.0], [73.9, 285.0], [74.0, 285.0], [74.1, 285.0], [74.2, 285.0], [74.3, 285.0], [74.4, 285.0], [74.5, 285.0], [74.6, 285.0], [74.7, 285.0], [74.8, 285.0], [74.9, 285.0], [75.0, 285.0], [75.1, 286.0], [75.2, 286.0], [75.3, 286.0], [75.4, 286.0], [75.5, 286.0], [75.6, 286.0], [75.7, 287.0], [75.8, 287.0], [75.9, 287.0], [76.0, 287.0], [76.1, 287.0], [76.2, 287.0], [76.3, 287.0], [76.4, 287.0], [76.5, 287.0], [76.6, 287.0], [76.7, 287.0], [76.8, 287.0], [76.9, 287.0], [77.0, 287.0], [77.1, 287.0], [77.2, 287.0], [77.3, 287.0], [77.4, 288.0], [77.5, 288.0], [77.6, 288.0], [77.7, 288.0], [77.8, 288.0], [77.9, 288.0], [78.0, 288.0], [78.1, 288.0], [78.2, 288.0], [78.3, 288.0], [78.4, 288.0], [78.5, 288.0], [78.6, 288.0], [78.7, 288.0], [78.8, 288.0], [78.9, 288.0], [79.0, 288.0], [79.1, 288.0], [79.2, 288.0], [79.3, 288.0], [79.4, 288.0], [79.5, 288.0], [79.6, 288.0], [79.7, 288.0], [79.8, 288.0], [79.9, 288.0], [80.0, 288.0], [80.1, 288.0], [80.2, 288.0], [80.3, 288.0], [80.4, 289.0], [80.5, 289.0], [80.6, 289.0], [80.7, 289.0], [80.8, 289.0], [80.9, 289.0], [81.0, 289.0], [81.1, 289.0], [81.2, 289.0], [81.3, 289.0], [81.4, 290.0], [81.5, 290.0], [81.6, 290.0], [81.7, 290.0], [81.8, 290.0], [81.9, 290.0], [82.0, 290.0], [82.1, 290.0], [82.2, 290.0], [82.3, 290.0], [82.4, 291.0], [82.5, 291.0], [82.6, 291.0], [82.7, 291.0], [82.8, 291.0], [82.9, 291.0], [83.0, 291.0], [83.1, 291.0], [83.2, 291.0], [83.3, 291.0], [83.4, 292.0], [83.5, 292.0], [83.6, 292.0], [83.7, 292.0], [83.8, 292.0], [83.9, 292.0], [84.0, 292.0], [84.1, 292.0], [84.2, 292.0], [84.3, 292.0], [84.4, 292.0], [84.5, 292.0], [84.6, 292.0], [84.7, 294.0], [84.8, 294.0], [84.9, 294.0], [85.0, 294.0], [85.1, 295.0], [85.2, 295.0], [85.3, 295.0], [85.4, 295.0], [85.5, 295.0], [85.6, 295.0], [85.7, 296.0], [85.8, 296.0], [85.9, 296.0], [86.0, 296.0], [86.1, 297.0], [86.2, 297.0], [86.3, 297.0], [86.4, 298.0], [86.5, 298.0], [86.6, 298.0], [86.7, 298.0], [86.8, 298.0], [86.9, 298.0], [87.0, 298.0], [87.1, 298.0], [87.2, 298.0], [87.3, 298.0], [87.4, 298.0], [87.5, 298.0], [87.6, 298.0], [87.7, 299.0], [87.8, 299.0], [87.9, 299.0], [88.0, 299.0], [88.1, 299.0], [88.2, 299.0], [88.3, 299.0], [88.4, 299.0], [88.5, 299.0], [88.6, 299.0], [88.7, 299.0], [88.8, 299.0], [88.9, 299.0], [89.0, 299.0], [89.1, 299.0], [89.2, 299.0], [89.3, 299.0], [89.4, 300.0], [89.5, 300.0], [89.6, 300.0], [89.7, 300.0], [89.8, 300.0], [89.9, 300.0], [90.0, 300.0], [90.1, 300.0], [90.2, 300.0], [90.3, 300.0], [90.4, 300.0], [90.5, 300.0], [90.6, 300.0], [90.7, 300.0], [90.8, 300.0], [90.9, 300.0], [91.0, 300.0], [91.1, 300.0], [91.2, 300.0], [91.3, 300.0], [91.4, 301.0], [91.5, 301.0], [91.6, 301.0], [91.7, 301.0], [91.8, 301.0], [91.9, 301.0], [92.0, 301.0], [92.1, 301.0], [92.2, 301.0], [92.3, 301.0], [92.4, 302.0], [92.5, 302.0], [92.6, 302.0], [92.7, 302.0], [92.8, 302.0], [92.9, 302.0], [93.0, 302.0], [93.1, 302.0], [93.2, 302.0], [93.3, 302.0], [93.4, 302.0], [93.5, 302.0], [93.6, 302.0], [93.7, 302.0], [93.8, 302.0], [93.9, 302.0], [94.0, 302.0], [94.1, 303.0], [94.2, 303.0], [94.3, 303.0], [94.4, 303.0], [94.5, 303.0], [94.6, 303.0], [94.7, 303.0], [94.8, 303.0], [94.9, 303.0], [95.0, 303.0], [95.1, 304.0], [95.2, 304.0], [95.3, 304.0], [95.4, 304.0], [95.5, 304.0], [95.6, 304.0], [95.7, 304.0], [95.8, 304.0], [95.9, 304.0], [96.0, 304.0], [96.1, 304.0], [96.2, 304.0], [96.3, 304.0], [96.4, 304.0], [96.5, 304.0], [96.6, 304.0], [96.7, 305.0], [96.8, 305.0], [96.9, 305.0], [97.0, 305.0], [97.1, 305.0], [97.2, 305.0], [97.3, 305.0], [97.4, 305.0], [97.5, 305.0], [97.6, 305.0], [97.7, 305.0], [97.8, 305.0], [97.9, 305.0], [98.0, 305.0], [98.1, 305.0], [98.2, 305.0], [98.3, 305.0], [98.4, 305.0], [98.5, 305.0], [98.6, 305.0], [98.7, 306.0], [98.8, 306.0], [98.9, 306.0], [99.0, 306.0], [99.1, 307.0], [99.2, 307.0], [99.3, 307.0], [99.4, 307.0], [99.5, 307.0], [99.6, 307.0], [99.7, 307.0], [99.8, 307.0], [99.9, 307.0], [100.0, 307.0]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 147.0, "series": [{"data": [[0.0, 67.0], [300.0, 32.0], [100.0, 54.0], [200.0, 147.0]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 300.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [[0.0, 300.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 55.96999999999998, "minX": 1.69256568E12, "maxY": 55.96999999999998, "series": [{"data": [[1.69256568E12, 55.96999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69256568E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 35.0, "minX": 6.0, "maxY": 305.22222222222223, "series": [{"data": [[6.0, 35.0], [14.0, 61.4], [15.0, 89.0], [16.0, 72.5], [17.0, 91.25], [18.0, 83.25], [19.0, 97.0], [20.0, 237.23809523809524], [21.0, 120.0], [22.0, 143.0], [23.0, 182.5], [24.0, 144.66666666666666], [25.0, 100.42857142857143], [26.0, 148.0], [27.0, 150.66666666666666], [28.0, 106.85714285714286], [29.0, 103.28571428571429], [30.0, 125.0], [31.0, 112.85714285714286], [33.0, 118.0], [32.0, 158.33333333333334], [35.0, 166.0], [34.0, 136.2], [36.0, 131.8], [37.0, 142.8], [38.0, 128.75], [39.0, 158.0], [40.0, 141.83333333333334], [41.0, 135.5], [42.0, 163.5], [43.0, 288.0], [45.0, 288.0], [44.0, 287.0], [47.0, 289.0], [46.0, 288.0], [49.0, 288.0], [48.0, 289.0], [51.0, 288.0], [50.0, 288.0], [52.0, 216.5], [53.0, 217.5], [55.0, 287.0], [54.0, 286.0], [56.0, 206.5], [57.0, 253.0], [59.0, 208.5], [58.0, 253.0], [61.0, 199.0], [60.0, 254.0], [63.0, 257.0], [62.0, 255.0], [64.0, 219.0], [66.0, 223.5], [67.0, 263.0], [65.0, 261.0], [69.0, 211.5], [71.0, 267.0], [70.0, 267.0], [68.0, 265.0], [75.0, 241.5], [74.0, 271.0], [73.0, 270.0], [72.0, 269.0], [76.0, 224.0], [77.0, 246.0], [78.0, 248.5], [79.0, 252.0], [83.0, 231.6], [82.0, 239.0], [81.0, 250.0], [80.0, 241.33333333333334], [87.0, 246.0], [85.0, 234.75], [84.0, 235.33333333333334], [86.0, 283.0], [88.0, 231.0], [89.0, 268.5], [91.0, 270.0], [90.0, 285.0], [94.0, 276.0], [95.0, 288.0], [93.0, 285.0], [92.0, 284.0], [99.0, 292.0], [98.0, 292.0], [97.0, 291.0], [96.0, 290.0], [101.0, 287.5], [103.0, 300.0], [102.0, 298.0], [100.0, 295.0], [105.0, 294.2], [106.0, 299.0], [107.0, 301.3076923076923], [104.0, 298.3333333333333], [110.0, 305.22222222222223], [109.0, 304.75], [108.0, 302.6666666666667]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}, {"data": [[55.973333333333336, 200.9566666666667]], "isOverall": false, "label": "DELETE - /usuarios-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 110.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1390.0, "minX": 1.69256568E12, "maxY": 2320.0833333333335, "series": [{"data": [[1.69256568E12, 2320.0833333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69256568E12, 1390.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69256568E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 200.9566666666667, "minX": 1.69256568E12, "maxY": 200.9566666666667, "series": [{"data": [[1.69256568E12, 200.9566666666667]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69256568E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 200.94000000000003, "minX": 1.69256568E12, "maxY": 200.94000000000003, "series": [{"data": [[1.69256568E12, 200.94000000000003]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69256568E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.48999999999999994, "minX": 1.69256568E12, "maxY": 0.48999999999999994, "series": [{"data": [[1.69256568E12, 0.48999999999999994]], "isOverall": false, "label": "DELETE - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69256568E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.69256568E12, "maxY": 307.0, "series": [{"data": [[1.69256568E12, 307.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69256568E12, 300.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69256568E12, 306.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69256568E12, 303.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69256568E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69256568E12, 234.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69256568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 103.0, "minX": 145.0, "maxY": 285.0, "series": [{"data": [[145.0, 103.0], [155.0, 285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 103.0, "minX": 145.0, "maxY": 285.0, "series": [{"data": [[145.0, 103.0], [155.0, 285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.69256568E12, "maxY": 5.0, "series": [{"data": [[1.69256568E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69256568E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.69256568E12, "maxY": 5.0, "series": [{"data": [[1.69256568E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69256568E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.69256568E12, "maxY": 5.0, "series": [{"data": [[1.69256568E12, 5.0]], "isOverall": false, "label": "DELETE - /usuarios-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69256568E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.69256568E12, "maxY": 5.0, "series": [{"data": [[1.69256568E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69256568E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

