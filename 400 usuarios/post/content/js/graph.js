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
        data: {"result": {"minY": 127.0, "minX": 0.0, "maxY": 934.0, "series": [{"data": [[0.0, 127.0], [0.1, 127.0], [0.2, 127.0], [0.3, 131.0], [0.4, 131.0], [0.5, 141.0], [0.6, 141.0], [0.7, 141.0], [0.8, 143.0], [0.9, 143.0], [1.0, 144.0], [1.1, 144.0], [1.2, 144.0], [1.3, 146.0], [1.4, 146.0], [1.5, 149.0], [1.6, 149.0], [1.7, 149.0], [1.8, 154.0], [1.9, 154.0], [2.0, 155.0], [2.1, 155.0], [2.2, 155.0], [2.3, 167.0], [2.4, 167.0], [2.5, 167.0], [2.6, 167.0], [2.7, 167.0], [2.8, 175.0], [2.9, 175.0], [3.0, 203.0], [3.1, 203.0], [3.2, 203.0], [3.3, 221.0], [3.4, 221.0], [3.5, 221.0], [3.6, 221.0], [3.7, 221.0], [3.8, 223.0], [3.9, 223.0], [4.0, 223.0], [4.1, 223.0], [4.2, 223.0], [4.3, 226.0], [4.4, 226.0], [4.5, 228.0], [4.6, 228.0], [4.7, 228.0], [4.8, 236.0], [4.9, 236.0], [5.0, 236.0], [5.1, 236.0], [5.2, 236.0], [5.3, 236.0], [5.4, 236.0], [5.5, 248.0], [5.6, 248.0], [5.7, 248.0], [5.8, 250.0], [5.9, 250.0], [6.0, 251.0], [6.1, 251.0], [6.2, 251.0], [6.3, 252.0], [6.4, 252.0], [6.5, 252.0], [6.6, 252.0], [6.7, 252.0], [6.8, 255.0], [6.9, 255.0], [7.0, 257.0], [7.1, 257.0], [7.2, 257.0], [7.3, 257.0], [7.4, 257.0], [7.5, 258.0], [7.6, 258.0], [7.7, 258.0], [7.8, 278.0], [7.9, 278.0], [8.0, 316.0], [8.1, 316.0], [8.2, 316.0], [8.3, 337.0], [8.4, 337.0], [8.5, 364.0], [8.6, 364.0], [8.7, 364.0], [8.8, 394.0], [8.9, 394.0], [9.0, 427.0], [9.1, 427.0], [9.2, 427.0], [9.3, 448.0], [9.4, 448.0], [9.5, 460.0], [9.6, 460.0], [9.7, 460.0], [9.8, 467.0], [9.9, 467.0], [10.0, 494.0], [10.1, 494.0], [10.2, 494.0], [10.3, 500.0], [10.4, 500.0], [10.5, 514.0], [10.6, 514.0], [10.7, 514.0], [10.8, 515.0], [10.9, 515.0], [11.0, 517.0], [11.1, 517.0], [11.2, 517.0], [11.3, 523.0], [11.4, 523.0], [11.5, 532.0], [11.6, 532.0], [11.7, 532.0], [11.8, 542.0], [11.9, 542.0], [12.0, 544.0], [12.1, 544.0], [12.2, 544.0], [12.3, 545.0], [12.4, 545.0], [12.5, 548.0], [12.6, 548.0], [12.7, 548.0], [12.8, 548.0], [12.9, 548.0], [13.0, 548.0], [13.1, 548.0], [13.2, 548.0], [13.3, 548.0], [13.4, 548.0], [13.5, 548.0], [13.6, 548.0], [13.7, 548.0], [13.8, 549.0], [13.9, 549.0], [14.0, 550.0], [14.1, 550.0], [14.2, 550.0], [14.3, 550.0], [14.4, 550.0], [14.5, 550.0], [14.6, 550.0], [14.7, 550.0], [14.8, 550.0], [14.9, 550.0], [15.0, 551.0], [15.1, 551.0], [15.2, 551.0], [15.3, 553.0], [15.4, 553.0], [15.5, 554.0], [15.6, 554.0], [15.7, 554.0], [15.8, 554.0], [15.9, 554.0], [16.0, 554.0], [16.1, 554.0], [16.2, 554.0], [16.3, 555.0], [16.4, 555.0], [16.5, 555.0], [16.6, 555.0], [16.7, 555.0], [16.8, 555.0], [16.9, 555.0], [17.0, 556.0], [17.1, 556.0], [17.2, 556.0], [17.3, 557.0], [17.4, 557.0], [17.5, 557.0], [17.6, 557.0], [17.7, 557.0], [17.8, 557.0], [17.9, 557.0], [18.0, 558.0], [18.1, 558.0], [18.2, 558.0], [18.3, 558.0], [18.4, 558.0], [18.5, 558.0], [18.6, 558.0], [18.7, 558.0], [18.8, 559.0], [18.9, 559.0], [19.0, 560.0], [19.1, 560.0], [19.2, 560.0], [19.3, 561.0], [19.4, 561.0], [19.5, 561.0], [19.6, 561.0], [19.7, 561.0], [19.8, 562.0], [19.9, 562.0], [20.0, 563.0], [20.1, 563.0], [20.2, 563.0], [20.3, 564.0], [20.4, 564.0], [20.5, 569.0], [20.6, 569.0], [20.7, 569.0], [20.8, 570.0], [20.9, 570.0], [21.0, 574.0], [21.1, 574.0], [21.2, 574.0], [21.3, 577.0], [21.4, 577.0], [21.5, 578.0], [21.6, 578.0], [21.7, 578.0], [21.8, 586.0], [21.9, 586.0], [22.0, 586.0], [22.1, 586.0], [22.2, 586.0], [22.3, 589.0], [22.4, 589.0], [22.5, 589.0], [22.6, 589.0], [22.7, 589.0], [22.8, 589.0], [22.9, 589.0], [23.0, 637.0], [23.1, 637.0], [23.2, 637.0], [23.3, 640.0], [23.4, 640.0], [23.5, 644.0], [23.6, 644.0], [23.7, 644.0], [23.8, 647.0], [23.9, 647.0], [24.0, 652.0], [24.1, 652.0], [24.2, 652.0], [24.3, 656.0], [24.4, 656.0], [24.5, 663.0], [24.6, 663.0], [24.7, 663.0], [24.8, 675.0], [24.9, 675.0], [25.0, 682.0], [25.1, 682.0], [25.2, 682.0], [25.3, 682.0], [25.4, 682.0], [25.5, 684.0], [25.6, 684.0], [25.7, 684.0], [25.8, 689.0], [25.9, 689.0], [26.0, 692.0], [26.1, 692.0], [26.2, 692.0], [26.3, 707.0], [26.4, 707.0], [26.5, 718.0], [26.6, 718.0], [26.7, 718.0], [26.8, 720.0], [26.9, 720.0], [27.0, 724.0], [27.1, 724.0], [27.2, 724.0], [27.3, 728.0], [27.4, 728.0], [27.5, 764.0], [27.6, 764.0], [27.7, 764.0], [27.8, 769.0], [27.9, 769.0], [28.0, 771.0], [28.1, 771.0], [28.2, 771.0], [28.3, 772.0], [28.4, 772.0], [28.5, 773.0], [28.6, 773.0], [28.7, 773.0], [28.8, 776.0], [28.9, 776.0], [29.0, 782.0], [29.1, 782.0], [29.2, 782.0], [29.3, 792.0], [29.4, 792.0], [29.5, 792.0], [29.6, 792.0], [29.7, 792.0], [29.8, 793.0], [29.9, 793.0], [30.0, 795.0], [30.1, 795.0], [30.2, 795.0], [30.3, 796.0], [30.4, 796.0], [30.5, 798.0], [30.6, 798.0], [30.7, 798.0], [30.8, 798.0], [30.9, 798.0], [31.0, 798.0], [31.1, 798.0], [31.2, 798.0], [31.3, 799.0], [31.4, 799.0], [31.5, 799.0], [31.6, 799.0], [31.7, 799.0], [31.8, 799.0], [31.9, 799.0], [32.0, 799.0], [32.1, 799.0], [32.2, 799.0], [32.3, 800.0], [32.4, 800.0], [32.5, 800.0], [32.6, 800.0], [32.7, 800.0], [32.8, 801.0], [32.9, 801.0], [33.0, 802.0], [33.1, 802.0], [33.2, 802.0], [33.3, 802.0], [33.4, 802.0], [33.5, 803.0], [33.6, 803.0], [33.7, 803.0], [33.8, 804.0], [33.9, 804.0], [34.0, 804.0], [34.1, 804.0], [34.2, 804.0], [34.3, 804.0], [34.4, 804.0], [34.5, 804.0], [34.6, 804.0], [34.7, 804.0], [34.8, 805.0], [34.9, 805.0], [35.0, 805.0], [35.1, 805.0], [35.2, 805.0], [35.3, 805.0], [35.4, 805.0], [35.5, 806.0], [35.6, 806.0], [35.7, 806.0], [35.8, 806.0], [35.9, 806.0], [36.0, 806.0], [36.1, 806.0], [36.2, 806.0], [36.3, 806.0], [36.4, 806.0], [36.5, 806.0], [36.6, 806.0], [36.7, 806.0], [36.8, 806.0], [36.9, 806.0], [37.0, 806.0], [37.1, 806.0], [37.2, 806.0], [37.3, 806.0], [37.4, 806.0], [37.5, 806.0], [37.6, 806.0], [37.7, 806.0], [37.8, 806.0], [37.9, 806.0], [38.0, 806.0], [38.1, 806.0], [38.2, 806.0], [38.3, 806.0], [38.4, 806.0], [38.5, 806.0], [38.6, 806.0], [38.7, 806.0], [38.8, 806.0], [38.9, 806.0], [39.0, 807.0], [39.1, 807.0], [39.2, 807.0], [39.3, 807.0], [39.4, 807.0], [39.5, 807.0], [39.6, 807.0], [39.7, 807.0], [39.8, 807.0], [39.9, 807.0], [40.0, 807.0], [40.1, 807.0], [40.2, 807.0], [40.3, 807.0], [40.4, 807.0], [40.5, 807.0], [40.6, 807.0], [40.7, 807.0], [40.8, 807.0], [40.9, 807.0], [41.0, 807.0], [41.1, 807.0], [41.2, 807.0], [41.3, 807.0], [41.4, 807.0], [41.5, 807.0], [41.6, 807.0], [41.7, 807.0], [41.8, 807.0], [41.9, 807.0], [42.0, 808.0], [42.1, 808.0], [42.2, 808.0], [42.3, 808.0], [42.4, 808.0], [42.5, 808.0], [42.6, 808.0], [42.7, 808.0], [42.8, 808.0], [42.9, 808.0], [43.0, 808.0], [43.1, 808.0], [43.2, 808.0], [43.3, 808.0], [43.4, 808.0], [43.5, 809.0], [43.6, 809.0], [43.7, 809.0], [43.8, 809.0], [43.9, 809.0], [44.0, 809.0], [44.1, 809.0], [44.2, 809.0], [44.3, 809.0], [44.4, 809.0], [44.5, 809.0], [44.6, 809.0], [44.7, 809.0], [44.8, 809.0], [44.9, 809.0], [45.0, 810.0], [45.1, 810.0], [45.2, 810.0], [45.3, 810.0], [45.4, 810.0], [45.5, 810.0], [45.6, 810.0], [45.7, 810.0], [45.8, 810.0], [45.9, 810.0], [46.0, 810.0], [46.1, 810.0], [46.2, 810.0], [46.3, 810.0], [46.4, 810.0], [46.5, 810.0], [46.6, 810.0], [46.7, 810.0], [46.8, 811.0], [46.9, 811.0], [47.0, 811.0], [47.1, 811.0], [47.2, 811.0], [47.3, 811.0], [47.4, 811.0], [47.5, 811.0], [47.6, 811.0], [47.7, 811.0], [47.8, 811.0], [47.9, 811.0], [48.0, 811.0], [48.1, 811.0], [48.2, 811.0], [48.3, 811.0], [48.4, 811.0], [48.5, 812.0], [48.6, 812.0], [48.7, 812.0], [48.8, 812.0], [48.9, 812.0], [49.0, 812.0], [49.1, 812.0], [49.2, 812.0], [49.3, 812.0], [49.4, 812.0], [49.5, 813.0], [49.6, 813.0], [49.7, 813.0], [49.8, 813.0], [49.9, 813.0], [50.0, 813.0], [50.1, 813.0], [50.2, 813.0], [50.3, 813.0], [50.4, 813.0], [50.5, 813.0], [50.6, 813.0], [50.7, 813.0], [50.8, 813.0], [50.9, 813.0], [51.0, 813.0], [51.1, 813.0], [51.2, 813.0], [51.3, 813.0], [51.4, 813.0], [51.5, 814.0], [51.6, 814.0], [51.7, 814.0], [51.8, 814.0], [51.9, 814.0], [52.0, 814.0], [52.1, 814.0], [52.2, 814.0], [52.3, 815.0], [52.4, 815.0], [52.5, 815.0], [52.6, 815.0], [52.7, 815.0], [52.8, 815.0], [52.9, 815.0], [53.0, 815.0], [53.1, 815.0], [53.2, 815.0], [53.3, 815.0], [53.4, 815.0], [53.5, 815.0], [53.6, 815.0], [53.7, 815.0], [53.8, 815.0], [53.9, 815.0], [54.0, 816.0], [54.1, 816.0], [54.2, 816.0], [54.3, 816.0], [54.4, 816.0], [54.5, 816.0], [54.6, 816.0], [54.7, 816.0], [54.8, 818.0], [54.9, 818.0], [55.0, 819.0], [55.1, 819.0], [55.2, 819.0], [55.3, 819.0], [55.4, 819.0], [55.5, 819.0], [55.6, 819.0], [55.7, 819.0], [55.8, 819.0], [55.9, 819.0], [56.0, 819.0], [56.1, 819.0], [56.2, 819.0], [56.3, 819.0], [56.4, 819.0], [56.5, 819.0], [56.6, 819.0], [56.7, 819.0], [56.8, 819.0], [56.9, 819.0], [57.0, 819.0], [57.1, 819.0], [57.2, 819.0], [57.3, 820.0], [57.4, 820.0], [57.5, 820.0], [57.6, 820.0], [57.7, 820.0], [57.8, 820.0], [57.9, 820.0], [58.0, 820.0], [58.1, 820.0], [58.2, 820.0], [58.3, 821.0], [58.4, 821.0], [58.5, 821.0], [58.6, 821.0], [58.7, 821.0], [58.8, 821.0], [58.9, 821.0], [59.0, 821.0], [59.1, 821.0], [59.2, 821.0], [59.3, 822.0], [59.4, 822.0], [59.5, 822.0], [59.6, 822.0], [59.7, 822.0], [59.8, 823.0], [59.9, 823.0], [60.0, 823.0], [60.1, 823.0], [60.2, 823.0], [60.3, 823.0], [60.4, 823.0], [60.5, 823.0], [60.6, 823.0], [60.7, 823.0], [60.8, 824.0], [60.9, 824.0], [61.0, 826.0], [61.1, 826.0], [61.2, 826.0], [61.3, 826.0], [61.4, 826.0], [61.5, 826.0], [61.6, 826.0], [61.7, 826.0], [61.8, 827.0], [61.9, 827.0], [62.0, 828.0], [62.1, 828.0], [62.2, 828.0], [62.3, 828.0], [62.4, 828.0], [62.5, 828.0], [62.6, 828.0], [62.7, 828.0], [62.8, 828.0], [62.9, 828.0], [63.0, 829.0], [63.1, 829.0], [63.2, 829.0], [63.3, 829.0], [63.4, 829.0], [63.5, 829.0], [63.6, 829.0], [63.7, 829.0], [63.8, 829.0], [63.9, 829.0], [64.0, 829.0], [64.1, 829.0], [64.2, 829.0], [64.3, 829.0], [64.4, 829.0], [64.5, 829.0], [64.6, 829.0], [64.7, 829.0], [64.8, 829.0], [64.9, 829.0], [65.0, 830.0], [65.1, 830.0], [65.2, 830.0], [65.3, 830.0], [65.4, 830.0], [65.5, 830.0], [65.6, 830.0], [65.7, 830.0], [65.8, 831.0], [65.9, 831.0], [66.0, 831.0], [66.1, 831.0], [66.2, 831.0], [66.3, 831.0], [66.4, 831.0], [66.5, 831.0], [66.6, 831.0], [66.7, 831.0], [66.8, 832.0], [66.9, 832.0], [67.0, 832.0], [67.1, 832.0], [67.2, 832.0], [67.3, 832.0], [67.4, 832.0], [67.5, 832.0], [67.6, 832.0], [67.7, 832.0], [67.8, 832.0], [67.9, 832.0], [68.0, 832.0], [68.1, 832.0], [68.2, 832.0], [68.3, 832.0], [68.4, 832.0], [68.5, 833.0], [68.6, 833.0], [68.7, 833.0], [68.8, 833.0], [68.9, 833.0], [69.0, 833.0], [69.1, 833.0], [69.2, 833.0], [69.3, 835.0], [69.4, 835.0], [69.5, 836.0], [69.6, 836.0], [69.7, 836.0], [69.8, 837.0], [69.9, 837.0], [70.0, 837.0], [70.1, 837.0], [70.2, 837.0], [70.3, 838.0], [70.4, 838.0], [70.5, 838.0], [70.6, 838.0], [70.7, 838.0], [70.8, 838.0], [70.9, 838.0], [71.0, 840.0], [71.1, 840.0], [71.2, 840.0], [71.3, 840.0], [71.4, 840.0], [71.5, 840.0], [71.6, 840.0], [71.7, 840.0], [71.8, 840.0], [71.9, 840.0], [72.0, 841.0], [72.1, 841.0], [72.2, 841.0], [72.3, 841.0], [72.4, 841.0], [72.5, 842.0], [72.6, 842.0], [72.7, 842.0], [72.8, 856.0], [72.9, 856.0], [73.0, 866.0], [73.1, 866.0], [73.2, 866.0], [73.3, 867.0], [73.4, 867.0], [73.5, 868.0], [73.6, 868.0], [73.7, 868.0], [73.8, 869.0], [73.9, 869.0], [74.0, 869.0], [74.1, 869.0], [74.2, 869.0], [74.3, 871.0], [74.4, 871.0], [74.5, 873.0], [74.6, 873.0], [74.7, 873.0], [74.8, 873.0], [74.9, 873.0], [75.0, 874.0], [75.1, 874.0], [75.2, 874.0], [75.3, 874.0], [75.4, 874.0], [75.5, 874.0], [75.6, 874.0], [75.7, 874.0], [75.8, 875.0], [75.9, 875.0], [76.0, 875.0], [76.1, 875.0], [76.2, 875.0], [76.3, 876.0], [76.4, 876.0], [76.5, 876.0], [76.6, 876.0], [76.7, 876.0], [76.8, 877.0], [76.9, 877.0], [77.0, 877.0], [77.1, 877.0], [77.2, 877.0], [77.3, 878.0], [77.4, 878.0], [77.5, 878.0], [77.6, 878.0], [77.7, 878.0], [77.8, 878.0], [77.9, 878.0], [78.0, 878.0], [78.1, 878.0], [78.2, 878.0], [78.3, 878.0], [78.4, 878.0], [78.5, 878.0], [78.6, 878.0], [78.7, 878.0], [78.8, 879.0], [78.9, 879.0], [79.0, 879.0], [79.1, 879.0], [79.2, 879.0], [79.3, 879.0], [79.4, 879.0], [79.5, 879.0], [79.6, 879.0], [79.7, 879.0], [79.8, 879.0], [79.9, 879.0], [80.0, 879.0], [80.1, 879.0], [80.2, 879.0], [80.3, 879.0], [80.4, 879.0], [80.5, 879.0], [80.6, 879.0], [80.7, 879.0], [80.8, 880.0], [80.9, 880.0], [81.0, 880.0], [81.1, 880.0], [81.2, 880.0], [81.3, 880.0], [81.4, 880.0], [81.5, 881.0], [81.6, 881.0], [81.7, 881.0], [81.8, 881.0], [81.9, 881.0], [82.0, 881.0], [82.1, 881.0], [82.2, 881.0], [82.3, 881.0], [82.4, 881.0], [82.5, 882.0], [82.6, 882.0], [82.7, 882.0], [82.8, 882.0], [82.9, 882.0], [83.0, 882.0], [83.1, 882.0], [83.2, 882.0], [83.3, 883.0], [83.4, 883.0], [83.5, 883.0], [83.6, 883.0], [83.7, 883.0], [83.8, 883.0], [83.9, 883.0], [84.0, 884.0], [84.1, 884.0], [84.2, 884.0], [84.3, 884.0], [84.4, 884.0], [84.5, 884.0], [84.6, 884.0], [84.7, 884.0], [84.8, 884.0], [84.9, 884.0], [85.0, 885.0], [85.1, 885.0], [85.2, 885.0], [85.3, 885.0], [85.4, 885.0], [85.5, 885.0], [85.6, 885.0], [85.7, 885.0], [85.8, 885.0], [85.9, 885.0], [86.0, 885.0], [86.1, 885.0], [86.2, 885.0], [86.3, 886.0], [86.4, 886.0], [86.5, 894.0], [86.6, 894.0], [86.7, 894.0], [86.8, 894.0], [86.9, 894.0], [87.0, 895.0], [87.1, 895.0], [87.2, 895.0], [87.3, 895.0], [87.4, 895.0], [87.5, 895.0], [87.6, 895.0], [87.7, 895.0], [87.8, 895.0], [87.9, 895.0], [88.0, 895.0], [88.1, 895.0], [88.2, 895.0], [88.3, 896.0], [88.4, 896.0], [88.5, 897.0], [88.6, 897.0], [88.7, 897.0], [88.8, 897.0], [88.9, 897.0], [89.0, 900.0], [89.1, 900.0], [89.2, 900.0], [89.3, 908.0], [89.4, 908.0], [89.5, 909.0], [89.6, 909.0], [89.7, 909.0], [89.8, 916.0], [89.9, 916.0], [90.0, 919.0], [90.1, 919.0], [90.2, 919.0], [90.3, 921.0], [90.4, 921.0], [90.5, 921.0], [90.6, 921.0], [90.7, 921.0], [90.8, 924.0], [90.9, 924.0], [91.0, 924.0], [91.1, 924.0], [91.2, 924.0], [91.3, 925.0], [91.4, 925.0], [91.5, 925.0], [91.6, 925.0], [91.7, 925.0], [91.8, 926.0], [91.9, 926.0], [92.0, 926.0], [92.1, 926.0], [92.2, 926.0], [92.3, 926.0], [92.4, 926.0], [92.5, 926.0], [92.6, 926.0], [92.7, 926.0], [92.8, 926.0], [92.9, 926.0], [93.0, 927.0], [93.1, 927.0], [93.2, 927.0], [93.3, 927.0], [93.4, 927.0], [93.5, 928.0], [93.6, 928.0], [93.7, 928.0], [93.8, 928.0], [93.9, 928.0], [94.0, 928.0], [94.1, 928.0], [94.2, 928.0], [94.3, 928.0], [94.4, 928.0], [94.5, 928.0], [94.6, 928.0], [94.7, 928.0], [94.8, 928.0], [94.9, 928.0], [95.0, 928.0], [95.1, 928.0], [95.2, 928.0], [95.3, 928.0], [95.4, 928.0], [95.5, 928.0], [95.6, 928.0], [95.7, 928.0], [95.8, 929.0], [95.9, 929.0], [96.0, 929.0], [96.1, 929.0], [96.2, 929.0], [96.3, 929.0], [96.4, 929.0], [96.5, 929.0], [96.6, 929.0], [96.7, 929.0], [96.8, 930.0], [96.9, 930.0], [97.0, 930.0], [97.1, 930.0], [97.2, 930.0], [97.3, 930.0], [97.4, 930.0], [97.5, 931.0], [97.6, 931.0], [97.7, 931.0], [97.8, 931.0], [97.9, 931.0], [98.0, 931.0], [98.1, 931.0], [98.2, 931.0], [98.3, 931.0], [98.4, 931.0], [98.5, 931.0], [98.6, 931.0], [98.7, 931.0], [98.8, 932.0], [98.9, 932.0], [99.0, 932.0], [99.1, 932.0], [99.2, 932.0], [99.3, 933.0], [99.4, 933.0], [99.5, 933.0], [99.6, 933.0], [99.7, 933.0], [99.8, 934.0], [99.9, 934.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 100.0, "maxY": 227.0, "series": [{"data": [[300.0, 4.0], [600.0, 13.0], [700.0, 24.0], [100.0, 12.0], [200.0, 20.0], [400.0, 5.0], [800.0, 227.0], [900.0, 44.0], [500.0, 51.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 358.0, "series": [{"data": [[0.0, 42.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 358.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 141.26499999999996, "minX": 1.69237704E12, "maxY": 141.26499999999996, "series": [{"data": [[1.69237704E12, 141.26499999999996]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237704E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 339.0, "minX": 11.0, "maxY": 934.0, "series": [{"data": [[11.0, 811.8181818181819], [12.0, 813.0], [13.0, 814.0], [14.0, 815.0], [15.0, 815.0], [16.0, 816.0], [17.0, 815.0], [18.0, 814.0], [19.0, 813.0], [20.0, 812.0], [21.0, 810.0], [22.0, 809.0], [23.0, 807.0], [24.0, 806.0], [25.0, 807.0], [26.0, 806.0], [27.0, 807.0], [28.0, 808.0], [29.0, 810.0], [30.0, 810.0], [31.0, 811.0], [33.0, 813.0], [32.0, 811.0], [35.0, 807.0], [34.0, 809.0], [37.0, 805.0], [36.0, 803.0], [39.0, 802.0], [38.0, 801.0], [40.0, 463.0], [41.0, 798.0], [42.0, 356.66666666666663], [43.0, 363.66666666666663], [45.0, 477.0], [44.0, 800.0], [46.0, 483.0], [47.0, 799.0], [49.0, 364.66666666666663], [48.0, 480.5], [51.0, 490.5], [50.0, 486.5], [53.0, 802.0], [52.0, 804.0], [55.0, 805.0], [54.0, 804.0], [57.0, 805.0], [56.0, 804.0], [59.0, 504.5], [58.0, 806.0], [61.0, 810.0], [60.0, 806.0], [63.0, 807.0], [62.0, 808.0], [64.0, 339.0], [65.0, 420.0], [67.0, 378.75], [66.0, 807.0], [70.0, 361.8], [71.0, 347.5], [69.0, 809.0], [68.0, 808.0], [75.0, 806.0], [74.0, 806.0], [73.0, 807.0], [72.0, 806.0], [77.0, 542.0], [79.0, 807.0], [78.0, 807.0], [76.0, 808.0], [83.0, 809.0], [82.0, 810.0], [81.0, 811.0], [80.0, 809.0], [87.0, 812.0], [86.0, 811.0], [85.0, 810.0], [84.0, 808.0], [90.0, 564.5], [91.0, 815.0], [89.0, 814.0], [88.0, 813.0], [95.0, 577.5], [94.0, 816.0], [93.0, 815.0], [92.0, 815.0], [99.0, 819.0], [98.0, 821.0], [97.0, 820.0], [96.0, 819.0], [103.0, 592.0], [102.0, 819.0], [101.0, 819.0], [100.0, 819.0], [107.0, 821.0], [106.0, 820.0], [105.0, 820.0], [104.0, 819.0], [111.0, 821.0], [110.0, 819.0], [109.0, 819.0], [108.0, 819.0], [113.0, 608.0], [115.0, 823.0], [114.0, 823.0], [112.0, 821.0], [119.0, 824.0], [118.0, 823.0], [117.0, 823.0], [116.0, 822.0], [123.0, 627.5], [122.0, 827.0], [121.0, 826.0], [120.0, 826.0], [127.0, 829.0], [126.0, 829.0], [125.0, 829.0], [124.0, 828.0], [130.0, 638.5], [133.0, 644.5], [134.0, 647.5], [135.0, 829.0], [132.0, 828.0], [131.0, 829.0], [129.0, 831.0], [128.0, 830.0], [143.0, 832.0], [142.0, 833.0], [141.0, 832.0], [140.0, 832.0], [139.0, 831.0], [138.0, 830.0], [137.0, 829.0], [136.0, 830.0], [151.0, 690.5], [150.0, 691.0], [149.0, 605.4], [148.0, 690.0], [147.0, 688.0], [146.0, 832.0], [145.0, 831.0], [144.0, 831.0], [159.0, 629.3333333333334], [158.0, 696.5], [157.0, 696.0], [156.0, 696.5], [155.0, 694.5], [154.0, 694.0], [153.0, 693.0], [152.0, 692.5], [160.0, 631.6666666666666], [164.0, 638.3333333333334], [165.0, 637.0], [166.0, 663.0], [167.0, 667.0], [163.0, 699.5], [162.0, 699.5], [161.0, 698.0], [170.0, 672.3333333333334], [173.0, 630.4], [174.0, 689.6666666666666], [175.0, 610.8888888888889], [172.0, 755.5], [171.0, 743.5], [169.0, 741.0], [168.0, 740.5], [176.0, 694.3333333333334], [180.0, 782.5], [182.0, 784.5], [183.0, 787.5], [181.0, 930.0], [179.0, 928.0], [178.0, 928.0], [177.0, 927.0], [184.0, 788.0], [186.0, 791.5], [187.0, 793.5], [190.0, 663.0], [189.0, 934.0], [188.0, 933.0], [185.0, 931.0], [194.0, 675.0], [197.0, 682.0], [198.0, 684.0], [200.0, 690.5], [206.0, 816.5], [207.0, 909.0], [205.0, 929.0], [209.0, 809.0], [210.0, 807.5], [213.0, 783.0], [215.0, 894.0], [214.0, 895.0], [212.0, 894.0], [211.0, 895.0], [208.0, 908.0], [223.0, 878.0], [222.0, 877.0], [221.0, 876.0], [220.0, 875.0], [219.0, 896.0], [218.0, 897.0], [217.0, 895.0], [216.0, 895.0], [226.0, 821.5], [227.0, 824.0], [229.0, 800.25], [228.0, 826.0], [231.0, 884.0], [230.0, 881.0], [225.0, 878.0], [224.0, 879.0], [232.0, 831.5], [236.0, 838.5], [235.0, 823.3333333333334], [237.0, 818.25], [239.0, 883.0], [238.0, 882.0], [234.0, 883.0], [233.0, 882.0], [245.0, 846.5], [247.0, 882.0], [246.0, 885.0], [244.0, 885.0], [243.0, 884.0], [242.0, 885.0], [241.0, 884.0], [240.0, 883.0], [249.0, 847.5], [255.0, 879.0], [254.0, 878.0], [253.0, 879.0], [252.0, 878.0], [251.0, 881.0], [250.0, 880.0], [248.0, 879.0], [270.0, 861.0], [257.0, 852.0], [256.0, 880.0], [259.0, 878.0], [258.0, 877.0], [263.0, 874.0], [262.0, 873.0], [261.0, 875.0], [260.0, 879.0], [271.0, 868.0], [269.0, 867.0], [268.0, 871.0], [267.0, 874.0], [266.0, 873.0], [265.0, 876.0], [264.0, 874.0], [273.0, 869.0], [272.0, 869.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}, {"data": [[141.2675000000001, 740.6474999999995]], "isOverall": false, "label": "POST - /usuarios-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 273.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2107.0833333333335, "minX": 1.69237704E12, "maxY": 3366.6666666666665, "series": [{"data": [[1.69237704E12, 3366.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69237704E12, 2107.0833333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237704E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 740.6474999999995, "minX": 1.69237704E12, "maxY": 740.6474999999995, "series": [{"data": [[1.69237704E12, 740.6474999999995]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237704E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 740.6250000000002, "minX": 1.69237704E12, "maxY": 740.6250000000002, "series": [{"data": [[1.69237704E12, 740.6250000000002]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237704E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5699999999999995, "minX": 1.69237704E12, "maxY": 0.5699999999999995, "series": [{"data": [[1.69237704E12, 0.5699999999999995]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237704E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 127.0, "minX": 1.69237704E12, "maxY": 934.0, "series": [{"data": [[1.69237704E12, 934.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69237704E12, 918.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69237704E12, 932.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69237704E12, 928.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69237704E12, 127.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69237704E12, 813.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237704E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 223.0, "minX": 32.0, "maxY": 828.0, "series": [{"data": [[32.0, 223.0], [122.0, 638.5], [246.0, 828.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 246.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 222.5, "minX": 32.0, "maxY": 828.0, "series": [{"data": [[32.0, 222.5], [122.0, 638.5], [246.0, 828.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 246.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.69237704E12, "maxY": 6.666666666666667, "series": [{"data": [[1.69237704E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237704E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.69237704E12, "maxY": 6.666666666666667, "series": [{"data": [[1.69237704E12, 6.666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237704E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.69237704E12, "maxY": 6.666666666666667, "series": [{"data": [[1.69237704E12, 6.666666666666667]], "isOverall": false, "label": "POST - /usuarios-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237704E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.69237704E12, "maxY": 6.666666666666667, "series": [{"data": [[1.69237704E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237704E12, "title": "Total Transactions Per Second"}},
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

