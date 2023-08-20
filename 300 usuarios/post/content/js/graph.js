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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 874.0, "series": [{"data": [[0.0, 35.0], [0.1, 35.0], [0.2, 35.0], [0.3, 35.0], [0.4, 203.0], [0.5, 203.0], [0.6, 203.0], [0.7, 207.0], [0.8, 207.0], [0.9, 207.0], [1.0, 208.0], [1.1, 208.0], [1.2, 208.0], [1.3, 208.0], [1.4, 210.0], [1.5, 210.0], [1.6, 210.0], [1.7, 215.0], [1.8, 215.0], [1.9, 215.0], [2.0, 216.0], [2.1, 216.0], [2.2, 216.0], [2.3, 216.0], [2.4, 223.0], [2.5, 223.0], [2.6, 223.0], [2.7, 249.0], [2.8, 249.0], [2.9, 249.0], [3.0, 263.0], [3.1, 263.0], [3.2, 263.0], [3.3, 263.0], [3.4, 267.0], [3.5, 267.0], [3.6, 267.0], [3.7, 277.0], [3.8, 277.0], [3.9, 277.0], [4.0, 283.0], [4.1, 283.0], [4.2, 283.0], [4.3, 283.0], [4.4, 287.0], [4.5, 287.0], [4.6, 287.0], [4.7, 289.0], [4.8, 289.0], [4.9, 289.0], [5.0, 290.0], [5.1, 290.0], [5.2, 290.0], [5.3, 290.0], [5.4, 294.0], [5.5, 294.0], [5.6, 294.0], [5.7, 300.0], [5.8, 300.0], [5.9, 300.0], [6.0, 306.0], [6.1, 306.0], [6.2, 306.0], [6.3, 306.0], [6.4, 308.0], [6.5, 308.0], [6.6, 308.0], [6.7, 312.0], [6.8, 312.0], [6.9, 312.0], [7.0, 313.0], [7.1, 313.0], [7.2, 313.0], [7.3, 313.0], [7.4, 320.0], [7.5, 320.0], [7.6, 320.0], [7.7, 321.0], [7.8, 321.0], [7.9, 321.0], [8.0, 325.0], [8.1, 325.0], [8.2, 325.0], [8.3, 325.0], [8.4, 326.0], [8.5, 326.0], [8.6, 326.0], [8.7, 331.0], [8.8, 331.0], [8.9, 331.0], [9.0, 333.0], [9.1, 333.0], [9.2, 333.0], [9.3, 333.0], [9.4, 336.0], [9.5, 336.0], [9.6, 336.0], [9.7, 337.0], [9.8, 337.0], [9.9, 337.0], [10.0, 339.0], [10.1, 339.0], [10.2, 339.0], [10.3, 339.0], [10.4, 343.0], [10.5, 343.0], [10.6, 343.0], [10.7, 345.0], [10.8, 345.0], [10.9, 345.0], [11.0, 345.0], [11.1, 348.0], [11.2, 348.0], [11.3, 348.0], [11.4, 350.0], [11.5, 350.0], [11.6, 350.0], [11.7, 351.0], [11.8, 351.0], [11.9, 351.0], [12.0, 351.0], [12.1, 353.0], [12.2, 353.0], [12.3, 353.0], [12.4, 355.0], [12.5, 355.0], [12.6, 355.0], [12.7, 367.0], [12.8, 367.0], [12.9, 367.0], [13.0, 367.0], [13.1, 386.0], [13.2, 386.0], [13.3, 386.0], [13.4, 399.0], [13.5, 399.0], [13.6, 399.0], [13.7, 404.0], [13.8, 404.0], [13.9, 404.0], [14.0, 404.0], [14.1, 414.0], [14.2, 414.0], [14.3, 414.0], [14.4, 451.0], [14.5, 451.0], [14.6, 451.0], [14.7, 466.0], [14.8, 466.0], [14.9, 466.0], [15.0, 466.0], [15.1, 548.0], [15.2, 548.0], [15.3, 548.0], [15.4, 650.0], [15.5, 650.0], [15.6, 650.0], [15.7, 651.0], [15.8, 651.0], [15.9, 651.0], [16.0, 651.0], [16.1, 652.0], [16.2, 652.0], [16.3, 652.0], [16.4, 652.0], [16.5, 652.0], [16.6, 652.0], [16.7, 653.0], [16.8, 653.0], [16.9, 653.0], [17.0, 653.0], [17.1, 653.0], [17.2, 653.0], [17.3, 653.0], [17.4, 653.0], [17.5, 653.0], [17.6, 653.0], [17.7, 653.0], [17.8, 653.0], [17.9, 653.0], [18.0, 653.0], [18.1, 653.0], [18.2, 653.0], [18.3, 653.0], [18.4, 654.0], [18.5, 654.0], [18.6, 654.0], [18.7, 654.0], [18.8, 654.0], [18.9, 654.0], [19.0, 654.0], [19.1, 654.0], [19.2, 654.0], [19.3, 654.0], [19.4, 654.0], [19.5, 654.0], [19.6, 654.0], [19.7, 655.0], [19.8, 655.0], [19.9, 655.0], [20.0, 655.0], [20.1, 655.0], [20.2, 655.0], [20.3, 655.0], [20.4, 655.0], [20.5, 655.0], [20.6, 655.0], [20.7, 655.0], [20.8, 655.0], [20.9, 655.0], [21.0, 655.0], [21.1, 655.0], [21.2, 655.0], [21.3, 655.0], [21.4, 656.0], [21.5, 656.0], [21.6, 656.0], [21.7, 656.0], [21.8, 656.0], [21.9, 656.0], [22.0, 656.0], [22.1, 656.0], [22.2, 656.0], [22.3, 656.0], [22.4, 656.0], [22.5, 656.0], [22.6, 656.0], [22.7, 656.0], [22.8, 656.0], [22.9, 656.0], [23.0, 656.0], [23.1, 657.0], [23.2, 657.0], [23.3, 657.0], [23.4, 658.0], [23.5, 658.0], [23.6, 658.0], [23.7, 658.0], [23.8, 658.0], [23.9, 658.0], [24.0, 658.0], [24.1, 659.0], [24.2, 659.0], [24.3, 659.0], [24.4, 659.0], [24.5, 659.0], [24.6, 659.0], [24.7, 659.0], [24.8, 659.0], [24.9, 659.0], [25.0, 659.0], [25.1, 659.0], [25.2, 659.0], [25.3, 659.0], [25.4, 660.0], [25.5, 660.0], [25.6, 660.0], [25.7, 660.0], [25.8, 660.0], [25.9, 660.0], [26.0, 660.0], [26.1, 660.0], [26.2, 660.0], [26.3, 660.0], [26.4, 660.0], [26.5, 660.0], [26.6, 660.0], [26.7, 660.0], [26.8, 660.0], [26.9, 660.0], [27.0, 660.0], [27.1, 661.0], [27.2, 661.0], [27.3, 661.0], [27.4, 661.0], [27.5, 661.0], [27.6, 661.0], [27.7, 661.0], [27.8, 661.0], [27.9, 661.0], [28.0, 661.0], [28.1, 661.0], [28.2, 661.0], [28.3, 661.0], [28.4, 661.0], [28.5, 661.0], [28.6, 661.0], [28.7, 661.0], [28.8, 661.0], [28.9, 661.0], [29.0, 661.0], [29.1, 662.0], [29.2, 662.0], [29.3, 662.0], [29.4, 662.0], [29.5, 662.0], [29.6, 662.0], [29.7, 662.0], [29.8, 662.0], [29.9, 662.0], [30.0, 662.0], [30.1, 662.0], [30.2, 662.0], [30.3, 662.0], [30.4, 662.0], [30.5, 662.0], [30.6, 662.0], [30.7, 662.0], [30.8, 662.0], [30.9, 662.0], [31.0, 662.0], [31.1, 662.0], [31.2, 662.0], [31.3, 662.0], [31.4, 662.0], [31.5, 662.0], [31.6, 662.0], [31.7, 663.0], [31.8, 663.0], [31.9, 663.0], [32.0, 663.0], [32.1, 663.0], [32.2, 663.0], [32.3, 663.0], [32.4, 663.0], [32.5, 663.0], [32.6, 663.0], [32.7, 663.0], [32.8, 663.0], [32.9, 663.0], [33.0, 663.0], [33.1, 663.0], [33.2, 663.0], [33.3, 663.0], [33.4, 663.0], [33.5, 663.0], [33.6, 663.0], [33.7, 663.0], [33.8, 663.0], [33.9, 663.0], [34.0, 663.0], [34.1, 663.0], [34.2, 663.0], [34.3, 663.0], [34.4, 663.0], [34.5, 663.0], [34.6, 663.0], [34.7, 663.0], [34.8, 663.0], [34.9, 663.0], [35.0, 663.0], [35.1, 664.0], [35.2, 664.0], [35.3, 664.0], [35.4, 664.0], [35.5, 664.0], [35.6, 664.0], [35.7, 665.0], [35.8, 665.0], [35.9, 665.0], [36.0, 665.0], [36.1, 666.0], [36.2, 666.0], [36.3, 666.0], [36.4, 667.0], [36.5, 667.0], [36.6, 667.0], [36.7, 669.0], [36.8, 669.0], [36.9, 669.0], [37.0, 669.0], [37.1, 669.0], [37.2, 669.0], [37.3, 669.0], [37.4, 670.0], [37.5, 670.0], [37.6, 670.0], [37.7, 672.0], [37.8, 672.0], [37.9, 672.0], [38.0, 672.0], [38.1, 674.0], [38.2, 674.0], [38.3, 674.0], [38.4, 674.0], [38.5, 674.0], [38.6, 674.0], [38.7, 674.0], [38.8, 674.0], [38.9, 674.0], [39.0, 674.0], [39.1, 675.0], [39.2, 675.0], [39.3, 675.0], [39.4, 676.0], [39.5, 676.0], [39.6, 676.0], [39.7, 677.0], [39.8, 677.0], [39.9, 677.0], [40.0, 677.0], [40.1, 679.0], [40.2, 679.0], [40.3, 679.0], [40.4, 681.0], [40.5, 681.0], [40.6, 681.0], [40.7, 682.0], [40.8, 682.0], [40.9, 682.0], [41.0, 682.0], [41.1, 682.0], [41.2, 682.0], [41.3, 682.0], [41.4, 684.0], [41.5, 684.0], [41.6, 684.0], [41.7, 684.0], [41.8, 684.0], [41.9, 684.0], [42.0, 684.0], [42.1, 687.0], [42.2, 687.0], [42.3, 687.0], [42.4, 687.0], [42.5, 687.0], [42.6, 687.0], [42.7, 687.0], [42.8, 687.0], [42.9, 687.0], [43.0, 687.0], [43.1, 687.0], [43.2, 687.0], [43.3, 687.0], [43.4, 688.0], [43.5, 688.0], [43.6, 688.0], [43.7, 689.0], [43.8, 689.0], [43.9, 689.0], [44.0, 689.0], [44.1, 691.0], [44.2, 691.0], [44.3, 691.0], [44.4, 694.0], [44.5, 694.0], [44.6, 694.0], [44.7, 701.0], [44.8, 701.0], [44.9, 701.0], [45.0, 701.0], [45.1, 702.0], [45.2, 702.0], [45.3, 702.0], [45.4, 703.0], [45.5, 703.0], [45.6, 703.0], [45.7, 704.0], [45.8, 704.0], [45.9, 704.0], [46.0, 704.0], [46.1, 706.0], [46.2, 706.0], [46.3, 706.0], [46.4, 706.0], [46.5, 706.0], [46.6, 706.0], [46.7, 706.0], [46.8, 706.0], [46.9, 706.0], [47.0, 706.0], [47.1, 707.0], [47.2, 707.0], [47.3, 707.0], [47.4, 708.0], [47.5, 708.0], [47.6, 708.0], [47.7, 708.0], [47.8, 708.0], [47.9, 708.0], [48.0, 708.0], [48.1, 709.0], [48.2, 709.0], [48.3, 709.0], [48.4, 710.0], [48.5, 710.0], [48.6, 710.0], [48.7, 710.0], [48.8, 710.0], [48.9, 710.0], [49.0, 710.0], [49.1, 712.0], [49.2, 712.0], [49.3, 712.0], [49.4, 712.0], [49.5, 712.0], [49.6, 712.0], [49.7, 712.0], [49.8, 712.0], [49.9, 712.0], [50.0, 712.0], [50.1, 712.0], [50.2, 712.0], [50.3, 712.0], [50.4, 712.0], [50.5, 712.0], [50.6, 712.0], [50.7, 713.0], [50.8, 713.0], [50.9, 713.0], [51.0, 713.0], [51.1, 713.0], [51.2, 713.0], [51.3, 713.0], [51.4, 713.0], [51.5, 713.0], [51.6, 713.0], [51.7, 716.0], [51.8, 716.0], [51.9, 716.0], [52.0, 716.0], [52.1, 716.0], [52.2, 716.0], [52.3, 716.0], [52.4, 716.0], [52.5, 716.0], [52.6, 716.0], [52.7, 716.0], [52.8, 716.0], [52.9, 716.0], [53.0, 716.0], [53.1, 717.0], [53.2, 717.0], [53.3, 717.0], [53.4, 718.0], [53.5, 718.0], [53.6, 718.0], [53.7, 718.0], [53.8, 718.0], [53.9, 718.0], [54.0, 718.0], [54.1, 719.0], [54.2, 719.0], [54.3, 719.0], [54.4, 719.0], [54.5, 719.0], [54.6, 719.0], [54.7, 719.0], [54.8, 719.0], [54.9, 719.0], [55.0, 719.0], [55.1, 720.0], [55.2, 720.0], [55.3, 720.0], [55.4, 720.0], [55.5, 720.0], [55.6, 720.0], [55.7, 721.0], [55.8, 721.0], [55.9, 721.0], [56.0, 721.0], [56.1, 722.0], [56.2, 722.0], [56.3, 722.0], [56.4, 723.0], [56.5, 723.0], [56.6, 723.0], [56.7, 725.0], [56.8, 725.0], [56.9, 725.0], [57.0, 725.0], [57.1, 725.0], [57.2, 725.0], [57.3, 725.0], [57.4, 727.0], [57.5, 727.0], [57.6, 727.0], [57.7, 727.0], [57.8, 727.0], [57.9, 727.0], [58.0, 727.0], [58.1, 727.0], [58.2, 727.0], [58.3, 727.0], [58.4, 728.0], [58.5, 728.0], [58.6, 728.0], [58.7, 729.0], [58.8, 729.0], [58.9, 729.0], [59.0, 729.0], [59.1, 729.0], [59.2, 729.0], [59.3, 729.0], [59.4, 731.0], [59.5, 731.0], [59.6, 731.0], [59.7, 733.0], [59.8, 733.0], [59.9, 733.0], [60.0, 733.0], [60.1, 735.0], [60.2, 735.0], [60.3, 735.0], [60.4, 735.0], [60.5, 735.0], [60.6, 735.0], [60.7, 735.0], [60.8, 735.0], [60.9, 735.0], [61.0, 735.0], [61.1, 736.0], [61.2, 736.0], [61.3, 736.0], [61.4, 736.0], [61.5, 736.0], [61.6, 736.0], [61.7, 736.0], [61.8, 736.0], [61.9, 736.0], [62.0, 736.0], [62.1, 737.0], [62.2, 737.0], [62.3, 737.0], [62.4, 740.0], [62.5, 740.0], [62.6, 740.0], [62.7, 742.0], [62.8, 742.0], [62.9, 742.0], [63.0, 742.0], [63.1, 743.0], [63.2, 743.0], [63.3, 743.0], [63.4, 743.0], [63.5, 743.0], [63.6, 743.0], [63.7, 745.0], [63.8, 745.0], [63.9, 745.0], [64.0, 745.0], [64.1, 745.0], [64.2, 745.0], [64.3, 745.0], [64.4, 746.0], [64.5, 746.0], [64.6, 746.0], [64.7, 746.0], [64.8, 746.0], [64.9, 746.0], [65.0, 746.0], [65.1, 747.0], [65.2, 747.0], [65.3, 747.0], [65.4, 748.0], [65.5, 748.0], [65.6, 748.0], [65.7, 749.0], [65.8, 749.0], [65.9, 749.0], [66.0, 749.0], [66.1, 750.0], [66.2, 750.0], [66.3, 750.0], [66.4, 750.0], [66.5, 750.0], [66.6, 750.0], [66.7, 751.0], [66.8, 751.0], [66.9, 751.0], [67.0, 751.0], [67.1, 751.0], [67.2, 751.0], [67.3, 751.0], [67.4, 751.0], [67.5, 751.0], [67.6, 751.0], [67.7, 752.0], [67.8, 752.0], [67.9, 752.0], [68.0, 752.0], [68.1, 754.0], [68.2, 754.0], [68.3, 754.0], [68.4, 754.0], [68.5, 754.0], [68.6, 754.0], [68.7, 755.0], [68.8, 755.0], [68.9, 755.0], [69.0, 755.0], [69.1, 756.0], [69.2, 756.0], [69.3, 756.0], [69.4, 758.0], [69.5, 758.0], [69.6, 758.0], [69.7, 762.0], [69.8, 762.0], [69.9, 762.0], [70.0, 762.0], [70.1, 765.0], [70.2, 765.0], [70.3, 765.0], [70.4, 767.0], [70.5, 767.0], [70.6, 767.0], [70.7, 771.0], [70.8, 771.0], [70.9, 771.0], [71.0, 771.0], [71.1, 772.0], [71.2, 772.0], [71.3, 772.0], [71.4, 772.0], [71.5, 772.0], [71.6, 772.0], [71.7, 772.0], [71.8, 772.0], [71.9, 772.0], [72.0, 772.0], [72.1, 777.0], [72.2, 777.0], [72.3, 777.0], [72.4, 778.0], [72.5, 778.0], [72.6, 778.0], [72.7, 784.0], [72.8, 784.0], [72.9, 784.0], [73.0, 784.0], [73.1, 784.0], [73.2, 784.0], [73.3, 784.0], [73.4, 786.0], [73.5, 786.0], [73.6, 786.0], [73.7, 788.0], [73.8, 788.0], [73.9, 788.0], [74.0, 788.0], [74.1, 793.0], [74.2, 793.0], [74.3, 793.0], [74.4, 796.0], [74.5, 796.0], [74.6, 796.0], [74.7, 797.0], [74.8, 797.0], [74.9, 797.0], [75.0, 799.0], [75.1, 799.0], [75.2, 799.0], [75.3, 799.0], [75.4, 799.0], [75.5, 799.0], [75.6, 799.0], [75.7, 801.0], [75.8, 801.0], [75.9, 801.0], [76.0, 802.0], [76.1, 802.0], [76.2, 802.0], [76.3, 802.0], [76.4, 802.0], [76.5, 802.0], [76.6, 802.0], [76.7, 803.0], [76.8, 803.0], [76.9, 803.0], [77.0, 803.0], [77.1, 803.0], [77.2, 803.0], [77.3, 803.0], [77.4, 805.0], [77.5, 805.0], [77.6, 805.0], [77.7, 806.0], [77.8, 806.0], [77.9, 806.0], [78.0, 806.0], [78.1, 806.0], [78.2, 806.0], [78.3, 806.0], [78.4, 807.0], [78.5, 807.0], [78.6, 807.0], [78.7, 807.0], [78.8, 807.0], [78.9, 807.0], [79.0, 807.0], [79.1, 809.0], [79.2, 809.0], [79.3, 809.0], [79.4, 809.0], [79.5, 809.0], [79.6, 809.0], [79.7, 810.0], [79.8, 810.0], [79.9, 810.0], [80.0, 810.0], [80.1, 810.0], [80.2, 810.0], [80.3, 810.0], [80.4, 810.0], [80.5, 810.0], [80.6, 810.0], [80.7, 811.0], [80.8, 811.0], [80.9, 811.0], [81.0, 811.0], [81.1, 811.0], [81.2, 811.0], [81.3, 811.0], [81.4, 812.0], [81.5, 812.0], [81.6, 812.0], [81.7, 813.0], [81.8, 813.0], [81.9, 813.0], [82.0, 813.0], [82.1, 815.0], [82.2, 815.0], [82.3, 815.0], [82.4, 816.0], [82.5, 816.0], [82.6, 816.0], [82.7, 817.0], [82.8, 817.0], [82.9, 817.0], [83.0, 817.0], [83.1, 817.0], [83.2, 817.0], [83.3, 817.0], [83.4, 818.0], [83.5, 818.0], [83.6, 818.0], [83.7, 819.0], [83.8, 819.0], [83.9, 819.0], [84.0, 819.0], [84.1, 819.0], [84.2, 819.0], [84.3, 819.0], [84.4, 819.0], [84.5, 819.0], [84.6, 819.0], [84.7, 820.0], [84.8, 820.0], [84.9, 820.0], [85.0, 820.0], [85.1, 820.0], [85.2, 820.0], [85.3, 820.0], [85.4, 821.0], [85.5, 821.0], [85.6, 821.0], [85.7, 821.0], [85.8, 821.0], [85.9, 821.0], [86.0, 821.0], [86.1, 821.0], [86.2, 821.0], [86.3, 821.0], [86.4, 823.0], [86.5, 823.0], [86.6, 823.0], [86.7, 823.0], [86.8, 823.0], [86.9, 823.0], [87.0, 823.0], [87.1, 823.0], [87.2, 823.0], [87.3, 823.0], [87.4, 823.0], [87.5, 823.0], [87.6, 823.0], [87.7, 825.0], [87.8, 825.0], [87.9, 825.0], [88.0, 825.0], [88.1, 825.0], [88.2, 825.0], [88.3, 825.0], [88.4, 826.0], [88.5, 826.0], [88.6, 826.0], [88.7, 827.0], [88.8, 827.0], [88.9, 827.0], [89.0, 827.0], [89.1, 827.0], [89.2, 827.0], [89.3, 827.0], [89.4, 828.0], [89.5, 828.0], [89.6, 828.0], [89.7, 828.0], [89.8, 828.0], [89.9, 828.0], [90.0, 828.0], [90.1, 828.0], [90.2, 828.0], [90.3, 828.0], [90.4, 829.0], [90.5, 829.0], [90.6, 829.0], [90.7, 831.0], [90.8, 831.0], [90.9, 831.0], [91.0, 831.0], [91.1, 831.0], [91.2, 831.0], [91.3, 831.0], [91.4, 831.0], [91.5, 831.0], [91.6, 831.0], [91.7, 832.0], [91.8, 832.0], [91.9, 832.0], [92.0, 832.0], [92.1, 832.0], [92.2, 832.0], [92.3, 832.0], [92.4, 833.0], [92.5, 833.0], [92.6, 833.0], [92.7, 834.0], [92.8, 834.0], [92.9, 834.0], [93.0, 835.0], [93.1, 835.0], [93.2, 835.0], [93.3, 835.0], [93.4, 837.0], [93.5, 837.0], [93.6, 837.0], [93.7, 838.0], [93.8, 838.0], [93.9, 838.0], [94.0, 839.0], [94.1, 839.0], [94.2, 839.0], [94.3, 839.0], [94.4, 843.0], [94.5, 843.0], [94.6, 843.0], [94.7, 844.0], [94.8, 844.0], [94.9, 844.0], [95.0, 846.0], [95.1, 846.0], [95.2, 846.0], [95.3, 846.0], [95.4, 848.0], [95.5, 848.0], [95.6, 848.0], [95.7, 849.0], [95.8, 849.0], [95.9, 849.0], [96.0, 851.0], [96.1, 851.0], [96.2, 851.0], [96.3, 851.0], [96.4, 853.0], [96.5, 853.0], [96.6, 853.0], [96.7, 854.0], [96.8, 854.0], [96.9, 854.0], [97.0, 857.0], [97.1, 857.0], [97.2, 857.0], [97.3, 857.0], [97.4, 860.0], [97.5, 860.0], [97.6, 860.0], [97.7, 862.0], [97.8, 862.0], [97.9, 862.0], [98.0, 864.0], [98.1, 864.0], [98.2, 864.0], [98.3, 864.0], [98.4, 868.0], [98.5, 868.0], [98.6, 868.0], [98.7, 872.0], [98.8, 872.0], [98.9, 872.0], [99.0, 873.0], [99.1, 873.0], [99.2, 873.0], [99.3, 873.0], [99.4, 874.0], [99.5, 874.0], [99.6, 874.0], [99.7, 874.0], [99.8, 874.0], [99.9, 874.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 93.0, "series": [{"data": [[0.0, 1.0], [300.0, 24.0], [600.0, 88.0], [700.0, 93.0], [200.0, 16.0], [400.0, 4.0], [800.0, 73.0], [500.0, 1.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 255.0, "series": [{"data": [[0.0, 45.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 255.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 124.69333333333324, "minX": 1.69237698E12, "maxY": 124.69333333333324, "series": [{"data": [[1.69237698E12, 124.69333333333324]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237698E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 431.5, "minX": 1.0, "maxY": 874.0, "series": [{"data": [[2.0, 431.5], [3.0, 825.0], [4.0, 821.0], [5.0, 810.0], [6.0, 806.0], [7.0, 802.0], [8.0, 796.0], [9.0, 786.0], [10.0, 784.0], [11.0, 771.0], [12.0, 772.0], [13.0, 772.0], [14.0, 756.0], [15.0, 754.0], [16.0, 755.0], [17.0, 754.0], [18.0, 752.0], [19.0, 751.0], [20.0, 751.0], [21.0, 750.0], [22.0, 749.0], [23.0, 750.0], [24.0, 746.0], [25.0, 746.0], [26.0, 743.0], [27.0, 745.0], [28.0, 743.0], [29.0, 742.0], [30.0, 740.0], [31.0, 737.0], [33.0, 736.0], [32.0, 736.0], [35.0, 735.0], [34.0, 736.0], [37.0, 733.0], [36.0, 735.0], [39.0, 729.0], [38.0, 731.0], [41.0, 728.0], [40.0, 729.0], [43.0, 727.0], [42.0, 727.0], [45.0, 725.0], [44.0, 727.0], [47.0, 723.0], [46.0, 725.0], [49.0, 721.0], [48.0, 722.0], [51.0, 720.0], [50.0, 720.0], [53.0, 719.0], [52.0, 719.0], [55.0, 718.0], [54.0, 719.0], [57.0, 718.0], [56.0, 717.0], [59.0, 716.0], [58.0, 716.0], [61.0, 716.0], [60.0, 716.0], [63.0, 713.0], [62.0, 713.0], [64.0, 489.5], [67.0, 713.0], [66.0, 712.0], [65.0, 712.0], [70.0, 499.5], [71.0, 710.0], [69.0, 712.0], [68.0, 712.0], [75.0, 708.0], [74.0, 708.0], [73.0, 709.0], [72.0, 707.0], [79.0, 495.5], [78.0, 706.0], [77.0, 706.0], [76.0, 706.0], [83.0, 694.0], [82.0, 701.0], [81.0, 703.0], [80.0, 702.0], [87.0, 687.0], [86.0, 688.0], [85.0, 689.0], [84.0, 691.0], [91.0, 684.0], [90.0, 687.0], [89.0, 687.0], [88.0, 687.0], [95.0, 516.0], [94.0, 517.5], [93.0, 518.5], [92.0, 684.0], [99.0, 508.5], [98.0, 510.5], [97.0, 512.5], [96.0, 514.5], [103.0, 502.5], [102.0, 505.0], [101.0, 505.5], [100.0, 460.3333333333333], [107.0, 493.5], [106.0, 460.0], [105.0, 497.5], [104.0, 500.5], [111.0, 455.6666666666667], [110.0, 487.5], [109.0, 489.0], [108.0, 493.5], [115.0, 453.3333333333333], [114.0, 477.0], [113.0, 479.0], [112.0, 456.6666666666667], [119.0, 452.5], [118.0, 459.0], [117.0, 466.5], [116.0, 470.0], [123.0, 435.5], [122.0, 437.0], [121.0, 437.5], [120.0, 440.5], [126.0, 432.0], [125.0, 433.5], [124.0, 434.5], [127.0, 663.0], [130.0, 557.0], [134.0, 563.5], [135.0, 662.0], [133.0, 663.0], [132.0, 663.0], [131.0, 664.0], [129.0, 662.0], [128.0, 664.0], [140.0, 659.0], [139.0, 663.0], [138.0, 663.0], [137.0, 663.0], [136.0, 661.0], [159.0, 656.0], [158.0, 655.0], [157.0, 654.0], [156.0, 653.0], [155.0, 654.0], [154.0, 653.2857142857143], [167.0, 663.0], [166.0, 661.0], [165.0, 662.0], [164.0, 662.0], [163.0, 662.0], [162.0, 662.0], [161.0, 660.0], [160.0, 659.0], [175.0, 868.0], [174.0, 872.0], [173.0, 874.0], [172.0, 874.0], [171.0, 873.0], [170.0, 662.0], [169.0, 663.0], [168.0, 662.0], [183.0, 849.0], [182.0, 851.0], [181.0, 853.0], [180.0, 854.0], [179.0, 857.0], [178.0, 860.0], [177.0, 862.0], [176.0, 864.0], [187.0, 691.0], [191.0, 828.0], [190.0, 831.0], [189.0, 832.0], [188.0, 833.0], [186.0, 844.0], [185.0, 846.0], [184.0, 848.0], [199.0, 817.0], [198.0, 818.0], [197.0, 819.0], [196.0, 819.0], [195.0, 821.0], [194.0, 823.0], [193.0, 823.0], [192.0, 826.0], [207.0, 807.0], [206.0, 809.0], [205.0, 810.0], [204.0, 811.0], [203.0, 811.0], [202.0, 813.0], [201.0, 815.0], [200.0, 816.0], [215.0, 839.0], [214.0, 799.0], [213.0, 843.0], [212.0, 799.0], [211.0, 802.0], [210.0, 803.0], [209.0, 805.0], [208.0, 807.0], [223.0, 828.0], [222.0, 829.0], [221.0, 831.0], [220.0, 831.0], [219.0, 832.0], [218.0, 835.0], [217.0, 837.0], [216.0, 838.0], [231.0, 820.0], [230.0, 820.0], [229.0, 821.0], [228.0, 823.0], [227.0, 823.0], [226.0, 825.0], [225.0, 827.0], [224.0, 827.0], [239.0, 801.0], [238.0, 803.0], [237.0, 806.0], [236.0, 810.0], [235.0, 809.0], [234.0, 812.0], [233.0, 817.0], [232.0, 819.0], [247.0, 767.0], [246.0, 772.0], [245.0, 777.0], [244.0, 778.0], [243.0, 784.0], [242.0, 788.0], [241.0, 793.0], [240.0, 797.0], [253.0, 741.0], [252.0, 748.0], [251.0, 751.0], [250.0, 758.0], [249.0, 762.0], [248.0, 765.0], [1.0, 745.0]], "isOverall": false, "label": "POST - /usuarios", "isController": false}, {"data": [[124.69333333333324, 673.37]], "isOverall": false, "label": "POST - /usuarios-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 253.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1581.45, "minX": 1.69237698E12, "maxY": 2525.0, "series": [{"data": [[1.69237698E12, 2525.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69237698E12, 1581.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237698E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 673.37, "minX": 1.69237698E12, "maxY": 673.37, "series": [{"data": [[1.69237698E12, 673.37]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237698E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 673.3499999999996, "minX": 1.69237698E12, "maxY": 673.3499999999996, "series": [{"data": [[1.69237698E12, 673.3499999999996]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237698E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.74, "minX": 1.69237698E12, "maxY": 0.74, "series": [{"data": [[1.69237698E12, 0.74]], "isOverall": false, "label": "POST - /usuarios", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237698E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.69237698E12, "maxY": 874.0, "series": [{"data": [[1.69237698E12, 874.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69237698E12, 828.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69237698E12, 872.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69237698E12, 845.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69237698E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69237698E12, 712.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237698E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 320.0, "minX": 45.0, "maxY": 727.0, "series": [{"data": [[45.0, 320.0], [255.0, 727.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 255.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 320.0, "minX": 45.0, "maxY": 727.0, "series": [{"data": [[45.0, 320.0], [255.0, 727.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 255.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.69237698E12, "maxY": 5.0, "series": [{"data": [[1.69237698E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237698E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.69237698E12, "maxY": 5.0, "series": [{"data": [[1.69237698E12, 5.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69237698E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.69237698E12, "maxY": 5.0, "series": [{"data": [[1.69237698E12, 5.0]], "isOverall": false, "label": "POST - /usuarios-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237698E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.69237698E12, "maxY": 5.0, "series": [{"data": [[1.69237698E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69237698E12, "title": "Total Transactions Per Second"}},
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

