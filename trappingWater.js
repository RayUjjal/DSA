function trappingWater(arr, n) {
    let leftArr = [];
    let rightArr = [];

    let pointerL = arr[0];
    let pointerR = arr[n-1];

    for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
        if (pointerL <= arr[i]) {
            pointerL = arr[i];
        }
        leftArr.push(pointerL);

        if (pointerR <= arr[j]) {
            pointerR = arr[j];
        }
        rightArr.push(pointerR)
    }

    rightArr=rightArr.reverse();

    let count = 0;
    for (let i = 0; i < n; i++) {
        let pointer = leftArr[i] > rightArr[i] ? rightArr[i] : leftArr[i];
        count += pointer - arr[i];
    }

    return count;
}

console.time('execution_time');
let input = [3, 0, 0, 2, 0, 4, 0, 2, 3, 0, 3];
// let input = [167, 862, 718, 728, 750, 97, 266, 469, 99, 185, 322, 134, 564, 607, 662, 99, 354, 383, 388, 274, 124, 221, 45, 967, 573, 684, 569, 603, 1, 687, 10, 992, 987, 100, 712, 843, 699, 829, 865, 539, 215, 729, 651, 90, 991, 827, 564, 962, 77, 625, 770, 489, 445, 736, 447, 632, 969, 821, 216, 856, 488, 959, 222, 838, 24, 932, 348, 457, 361, 729, 353, 617, 372, 830, 825, 210, 604, 1000, 159, 2, 876, 209, 30, 663, 42, 821, 472, 276, 274, 847, 422, 686, 13, 28, 2, 258, 35, 965, 993, 569, 231, 963, 189, 670, 3, 222, 898, 751, 436, 830, 919, 387, 974, 350, 175, 500, 531, 214, 177, 228, 464, 952, 340, 596, 345, 549, 879, 627, 710, 793, 296, 52, 886, 300, 260, 387, 699, 786, 47, 73, 989, 926, 124, 310, 292, 18, 798, 575, 680, 714, 816, 840, 980, 778, 706, 339, 795, 244, 349, 649, 201, 455, 329, 417, 908, 573, 493, 479, 212, 923, 335, 711, 153, 886, 253, 682, 677, 324, 915, 104, 962, 953, 685, 951, 189, 947, 376, 2, 755, 432, 412, 518, 818, 207, 516, 585, 731, 212, 785, 219, 759, 712, 948, 842, 288, 448, 291, 745, 905, 132, 126, 712, 464, 395, 50, 194, 387, 765, 325, 82, 393, 497, 35, 984, 35, 753, 633, 651, 99, 482, 1000, 599, 483, 448, 652, 49, 368, 714, 494, 760, 681, 290, 383, 663, 587, 104, 677, 224, 263, 519, 651, 483, 190, 191, 692, 287, 787, 549, 344, 816, 762, 248, 42, 170, 152, 413, 105, 557, 147, 318, 318, 945, 635, 326, 61, 396, 970, 744, 304, 490, 504, 945, 800, 516, 169, 330, 125, 460, 171, 963, 664, 688, 322, 437, 15, 741, 535, 566, 81, 229, 689, 490, 490, 380, 330, 216, 585, 456, 869, 507, 937, 927, 654, 994, 645, 366, 203, 331, 279, 327, 441, 579, 730, 818, 387, 576, 62, 679, 790, 83, 709, 106, 136, 832, 708, 633, 19, 920, 803, 562, 316, 489, 552, 264, 489, 836, 337, 624, 939, 440, 370, 431, 855, 501, 334, 94, 947, 27, 528, 73, 8, 124, 772, 332, 642, 239, 170, 758, 120, 614, 379, 843, 656, 851, 399, 253, 178, 854, 222, 59, 801, 970, 581, 877, 757, 209, 316, 582, 468, 981, 493, 802, 738, 529, 104, 762, 206, 207, 813, 910, 744, 923, 401, 299, 312, 47, 925, 669, 120, 880, 226, 542, 61, 601, 602, 560, 490, 704, 171, 751, 493, 230, 77, 307, 158, 122, 727, 821, 837, 832, 845, 423, 163, 917, 4, 105, 716, 438, 849, 313, 340, 194, 631, 122, 304, 846, 391, 865, 558, 664, 517, 948, 415, 862, 368, 747, 443, 175, 482, 180, 390, 42, 673, 498, 114, 653, 286, 541, 381, 913, 396, 8, 325, 61, 371, 487, 353, 511, 573, 199, 857, 754, 320, 459, 865, 869, 422, 75, 857, 944, 97, 544, 265, 61, 211, 54, 956, 404, 853, 600, 362, 958, 990, 67, 723, 959, 966, 732, 648, 310, 348, 531, 284, 855, 437, 908, 555, 771, 566, 803, 201, 597, 652, 864, 638, 249, 641, 35, 281, 120, 274, 610, 795, 199, 95, 897, 878, 817, 58, 593, 174, 714, 115, 316, 590, 757, 76, 632, 277, 688, 865, 162, 130, 55, 882, 197, 766, 798, 348, 179, 842, 507, 164, 842, 361, 251, 606, 859, 295, 243, 941, 216, 458, 98, 12, 35, 759, 774, 564, 303, 368, 108, 119, 177, 229, 452, 341, 238, 984, 964, 988, 244, 550, 180, 565, 441, 747, 401, 996, 641, 173, 134, 729, 614, 340, 136, 677, 192, 704, 897, 583, 304, 403, 279, 864, 895, 312, 606, 235, 860, 869, 835, 953, 246, 549, 506, 563, 727, 25, 235, 402, 650, 640, 528, 188, 982, 436, 99, 23, 618, 959, 333, 467, 355, 878, 890, 907, 157, 821, 315, 357, 575, 380, 100, 602, 226, 608, 535, 439, 123, 508, 936, 229, 622, 753, 451, 439, 381, 211, 323, 162, 330, 831, 508, 137, 890, 994, 619, 258, 290, 428, 597, 154, 766, 949, 45, 568, 16, 958, 66, 289, 997, 355, 752, 392, 550, 495, 374, 185, 822, 904, 512, 942, 671, 477, 525, 633, 443, 566, 52, 963, 951, 427, 378, 660, 994, 856, 255, 220, 471, 759, 579, 865, 590, 502, 531, 770, 914, 778, 520, 556, 415, 836, 202, 251, 778, 755, 8, 115, 190, 418, 67, 271, 748, 348, 108, 793, 226, 462, 451, 660, 935, 563, 2, 735, 550, 197, 953, 514, 753, 211, 27, 30, 448, 102, 225, 176, 739, 216, 493, 630, 252, 991, 378, 934, 848, 110, 682, 827, 303, 134, 648, 728, 82, 387, 247, 122, 164, 1, 298, 745, 132, 793, 14, 672, 83, 110, 317, 310, 737, 109, 500, 812, 852, 964, 295, 975, 980, 330, 676, 152, 704, 552, 693, 770, 301, 942, 210, 371, 129, 17, 678, 87, 139, 988, 49, 202, 653, 580, 742, 981, 444, 305, 997, 179, 159, 97, 500, 852, 823, 551, 418, 49, 622, 476, 572, 632, 547, 333, 931, 411, 780, 430, 37, 132, 349, 188, 683, 692, 601, 545, 596, 557, 557, 908, 168, 372, 677, 231, 968, 59, 618, 245, 147, 381, 817, 211, 564, 363, 794, 358, 970, 823, 862, 198, 384, 280, 130, 178, 918, 333, 844, 580, 879, 69, 796, 182, 414, 383, 621, 213, 738, 829, 396, 813, 625, 902, 224, 605, 780, 51, 738, 748, 336, 546, 759, 595, 325, 826, 411, 741, 202, 671, 873, 574, 352, 591, 904, 320, 349, 323, 312, 739, 756, 130, 678, 349, 292, 482, 724, 48, 702, 752, 172, 156, 483, 867, 262, 205, 605, 876, 608, 518, 965, 368, 350, 189, 909, 929, 186, 673, 270, 193, 13, 50, 725, 433, 775, 343, 266, 346, 532, 782, 337, 26, 376, 936, 852, 193, 572, 154, 961, 268, 160, 612, 88, 745, 347, 171, 744, 396, 898, 57, 226, 346, 325, 392, 21, 644, 24, 515, 956, 606, 809, 822, 597, 632, 885, 831, 28, 589, 992, 884, 31, 579, 532, 823, 667, 706, 345, 344, 183, 504, 623, 985, 943, 484, 792, 400, 780, 9, 785, 208, 146, 958, 50, 729, 690, 140, 564, 817, 417, 935, 2, 147, 289, 120, 211, 343, 14, 738, 928, 538, 84, 805, 969, 824, 135, 432, 597, 175, 738, 441, 673, 998, 140, 753, 232, 141, 425, 84, 228, 495, 37, 767, 260, 469, 270, 941, 478, 597, 354, 291, 623, 667, 438, 818, 33, 942, 192, 669, 564, 207, 768, 124, 97, 85, 923, 929, 434, 476, 672, 201, 790, 696, 655, 204, 524, 228, 341, 592, 101, 96, 965, 323, 831, 418, 300, 800, 935, 100, 260, 261, 694, 991, 268, 210, 720, 670, 461, 308, 377, 230, 440, 266, 881, 876, 254, 256, 730, 808, 472, 130, 175, 656, 505, 987, 127, 96, 560, 279, 890, 753, 162, 390, 323, 335, 239, 891, 767, 808, 172, 835, 957, 210, 497, 793, 158, 491, 36, 49, 687, 439, 462, 811, 517, 646, 380, 19, 192, 476, 937, 751, 531, 285, 706, 593, 498, 592, 50, 790, 181, 787, 686, 805, 941, 1000, 284, 260, 605, 86, 648, 296, 379, 131, 711, 931, 966, 969, 680, 43, 649, 718, 751, 680, 585, 240, 612, 830, 140, 193, 131, 340, 235, 288, 85, 636, 506, 496, 999, 188, 925, 740, 954, 900, 197, 203, 683, 754, 690, 153, 11, 266, 227, 991, 154, 338, 805, 395, 887, 109, 577, 346, 212, 405, 921, 222, 664, 862, 235, 675, 980, 529, 614, 622, 498, 47, 637, 56, 442, 47, 579, 655, 127, 554, 366, 5, 130, 196, 662, 381, 917, 93, 8, 108, 691, 121, 558, 357, 702, 141, 121, 520, 625, 507, 426, 131, 576, 576, 373, 328, 884, 315, 311, 393, 763, 353, 841, 90, 263, 695, 957, 63, 142, 567, 577, 542, 730, 128, 954, 461, 161, 247, 259, 863, 168, 618, 670, 595, 700, 214, 714, 278, 969, 30, 590, 682, 407, 768, 605, 46, 201, 83, 746, 232, 608, 900, 533, 792, 855, 265, 711, 695, 216, 77, 922, 312, 208, 789, 917, 966, 62, 274, 151, 703, 793, 936, 145, 527, 691, 950, 249, 56, 960, 40, 340, 840, 652, 114, 300, 547, 660, 645, 914, 914, 27, 110, 558, 556, 640, 221, 221, 965, 70, 188, 274, 181, 981, 281, 496, 634, 999, 13, 774, 312, 85, 286, 612, 767, 58, 585, 173, 806, 640, 652, 446, 135, 434, 252, 718, 827, 962, 618, 966, 167, 116, 275, 851, 367, 59, 280, 114, 98, 163, 347, 819, 550, 254, 972, 153, 822, 522, 43, 393, 113, 515, 334, 513, 69, 261, 453, 363, 899, 501, 420, 793, 613, 273, 209, 59, 229, 316, 887, 103, 480, 231, 538, 433, 355, 981, 59, 884, 44, 29, 102, 303, 92, 445, 547, 507, 588, 780, 858, 628, 862, 953, 35, 598, 269, 595, 548, 946, 512, 177, 556, 985, 498, 467, 984, 304, 86, 608, 707, 444, 561, 937, 499, 656, 144, 886, 114, 149, 28, 480, 659, 522, 115, 310, 910, 68, 33, 588, 669, 967, 271, 128, 248, 141, 571, 583, 205, 759, 183, 545, 580, 570, 270, 896, 322, 379, 748, 590, 365, 415, 886, 831, 240, 692, 603, 164, 158, 916, 961, 738, 372, 219, 642, 27, 890, 678, 272, 507, 611, 302, 327, 566, 846, 950, 690, 464, 779, 505, 393, 213, 594, 72, 585, 450, 264, 963, 812, 939, 235, 109, 571, 447, 41, 973, 306, 257, 684, 722, 875, 152, 728, 78, 349, 745, 640, 831, 37, 187, 430, 10, 182, 475, 370, 377, 710, 242, 589, 798, 849, 892, 493, 640, 777, 633, 947, 374, 950, 105, 28, 193, 811, 572, 438, 335, 785, 521, 371, 485, 224, 56, 258, 973, 227, 392, 228, 145, 75, 789, 885, 302, 519, 645, 92, 292, 955, 130, 716, 741, 646, 157, 363, 36, 976, 113, 739, 33, 324, 933, 648, 442, 554, 46, 297, 419, 488, 117, 210, 449, 890, 356, 481, 987, 16, 887, 927, 874, 407, 521, 90, 499, 474, 60, 329, 219, 427, 797, 752, 234, 124, 319, 116, 251, 795, 47, 233, 475, 934, 864, 90, 384, 291, 960, 288, 236, 75, 603, 328, 218, 831, 70, 934, 16, 827, 366, 838, 965, 379, 98, 948, 949, 196, 614, 394, 259, 644, 466, 875, 214, 612, 683, 149, 71, 340, 832, 108, 378, 208, 679, 197, 875, 618, 257, 232, 531, 872, 387, 770, 523, 744, 703, 457, 520, 89, 354, 65, 63, 188, 623, 614, 811, 882, 220, 403, 654, 567, 115, 859, 844, 240, 69, 871, 262, 393, 546, 319, 925, 394, 571, 276, 932, 131, 51, 221, 3, 437, 139, 520, 58, 747, 590, 500, 851, 881, 957, 836, 68, 891, 475, 815, 11, 306, 19, 190, 746, 635, 81, 421, 21, 952, 198, 477, 257, 306, 960, 609, 792, 879, 937, 584, 890, 33, 351, 163, 862, 824, 204, 472, 969, 929, 255, 366, 358, 622, 915, 265, 488, 520, 222, 112, 748, 114, 612, 765, 817, 736, 301, 37, 988, 367, 12, 585, 999, 223, 178, 892, 707, 471, 107, 302, 342, 992, 247, 793, 774, 645, 971, 178, 439, 456, 81, 857, 441, 600, 525, 196, 957, 42, 90, 113, 801, 470, 997, 355, 315, 116, 951, 791, 195, 895, 409, 288, 427, 16, 227, 959, 91, 213, 701, 743, 576, 708, 914, 704, 845, 835, 178, 938, 813, 778, 327, 260, 847, 227, 586, 230, 323, 744, 606, 388, 5, 478, 150, 428, 720, 169, 419, 618, 708, 409, 984, 513, 362, 771, 729, 589, 343, 858, 713, 286, 776, 959, 996, 792, 150, 527, 308, 513, 538, 300, 992, 795, 226, 615, 41, 922, 43, 548, 31, 640, 506, 390, 532, 80, 54, 301, 519, 567, 728, 21, 572, 113, 31, 994, 225, 371, 141, 568, 828, 13, 189, 903, 403, 475, 585, 79, 20, 244, 407, 640, 951, 482, 700, 630, 889, 235, 468, 883, 418, 815, 664, 917, 793, 492, 249, 985, 198, 550, 356, 96, 336, 274, 607, 602, 657, 549, 219, 120, 462, 833, 682, 166, 51, 792, 451, 144, 199, 508, 371, 796, 316, 93, 526, 521, 250, 228, 431, 198, 707, 465, 276, 631, 394, 344, 606, 907, 944, 721, 671, 601, 735, 632, 461, 469, 883, 730, 22, 493, 670, 697, 860, 480, 83, 817, 259, 817, 877, 172, 528, 129, 833, 675, 21, 539, 856, 239, 26, 956, 514, 583, 358, 163, 880, 90, 359, 125, 520, 183, 622, 83, 342, 571, 54, 304, 505, 523, 750, 334, 748, 835, 589, 129, 102, 790, 582, 734, 484, 246, 964, 581, 757, 847, 872, 756, 463, 623, 552, 102, 176, 553, 330, 333, 623, 402, 794, 331, 116, 563, 528, 447, 230, 304, 150, 318, 955, 840, 128, 672, 565, 623, 76, 76, 51, 576, 676, 878, 421, 919, 938, 297, 53, 198, 867, 968, 986, 966, 15, 553, 366, 480, 528, 308, 290, 100, 770, 136, 121, 442, 466, 119, 987, 128, 273, 899, 219, 955, 411, 105, 986, 633, 738, 69, 101, 527, 897, 798, 733, 6, 374, 123, 222, 99, 327, 614, 730, 15, 265, 560, 470, 100, 45, 621, 238, 26, 724, 897, 300, 288, 588, 788, 527, 159, 667, 938, 418, 603, 651, 406, 769, 771, 319, 656, 564, 204, 141, 908, 181, 345, 12, 189, 860, 902, 488, 337, 869, 548, 924, 151, 320, 999, 128, 591, 706, 159, 227, 585, 618, 844, 842, 224, 63, 246, 321, 160, 24, 627, 593, 742, 107, 818, 643, 551, 130, 359, 524, 668, 802, 432, 322, 668, 982, 632, 126, 490, 557, 498, 178, 921, 231, 784, 285, 157, 949, 916, 877, 339, 146, 320, 948, 748, 108, 201, 581, 870, 799, 33, 825, 860, 252, 148, 926, 80, 974, 83, 783, 774, 174, 80, 73, 714, 768, 81, 973, 260, 829, 8, 506, 594, 226, 658, 877, 103, 776, 535, 971, 299, 605, 906, 934, 708, 572, 673, 535, 19, 664, 367, 707, 274, 487, 544, 720, 500, 725, 509, 769, 829, 934, 481, 753, 484, 776, 602, 461, 294, 375, 524, 285, 150, 499, 315, 804, 545, 640, 719, 437, 510, 172, 157, 681, 134, 23, 964, 718, 904, 742, 965, 178, 473, 95, 798, 417, 266, 220, 928, 883, 122, 466, 680, 250, 965, 649, 947, 258, 21, 705, 502, 713, 736, 67, 941, 129, 274, 909, 218, 924, 781, 514, 928, 648, 647, 746, 392, 91, 819, 734, 372, 808, 161, 207, 715, 618, 146, 439, 844, 65, 327, 615, 438, 467, 114, 827, 327, 348, 463, 571, 923, 217, 684, 115, 536, 730, 815, 846, 735, 390, 791, 710, 486, 700, 837, 823, 612, 398, 324, 701, 236, 864, 503, 283, 982, 58, 450, 221, 578, 42, 245, 800, 895, 270, 556, 369, 275, 385, 753, 259, 731, 955, 454, 453, 173, 502, 582, 139, 324, 390, 60, 715, 637, 704, 830, 683, 559, 639, 250, 930, 544, 91, 474, 452, 990, 11, 269, 546, 754, 516, 318, 145, 92, 682, 777, 553, 995, 494, 674, 577, 75, 185, 304, 745, 213, 505, 667, 697, 865, 385, 946, 848, 727, 245, 320, 751, 263, 391, 159, 135, 701, 596, 141, 264, 193, 258, 119, 979, 862, 669, 403, 627, 289, 864, 474, 271, 252, 362, 222, 963, 28, 497, 128, 857, 680, 899, 494, 217, 43, 154, 723, 840, 964, 808, 935, 208, 988, 396, 608, 220, 39, 355, 905, 607, 430, 530, 914, 222, 164, 779, 944, 259, 984, 663, 86, 283, 379, 387, 252, 970, 162, 534, 384, 813, 742, 977, 419, 401, 91, 63, 693, 979, 677, 823, 90, 975, 162, 848, 895, 972, 707, 133, 360, 191, 868, 898, 804, 904, 919, 150, 699, 498, 884, 88, 726, 191, 357, 30, 697, 867, 927, 252, 589, 103, 50, 218, 952, 946, 420, 970, 81, 883, 763, 440, 78, 665, 322, 707, 424, 710, 214, 35, 946, 586, 281, 330, 566, 556, 247, 840, 345, 694, 119, 514, 136, 962, 12, 860, 258, 639, 109, 71, 136, 761, 98, 659, 483, 952, 488, 385, 252, 679, 598, 530, 418, 616, 393, 868, 111, 174, 741, 687, 788, 803, 797, 890, 638, 139, 76, 404, 857, 704, 405, 888, 581, 400, 65, 855, 502, 924, 479, 484, 824, 466, 760, 69, 385, 805, 995, 30, 497, 59, 750, 186, 761, 16, 591, 444, 328, 898, 338, 754, 140, 924, 684, 644, 935, 502, 903, 268, 375, 517, 910, 582, 298, 943, 972, 417, 361, 970, 832, 703, 789, 445, 76, 666, 544, 383, 102, 263, 830, 718, 550, 615, 43, 379, 129, 588, 574, 525, 974, 9, 190, 499, 671, 45, 300, 966, 162, 289, 706, 989, 456, 263, 514, 475, 637, 326, 194, 390, 434, 228, 230, 297, 48, 171, 583, 517, 590, 759, 874, 372, 220, 366, 44, 238, 80, 265, 381, 839, 841, 267, 322, 576, 619, 879, 592, 812, 707, 7, 614, 55, 963, 242, 314, 546, 55, 173, 550, 850, 953, 454, 836, 930, 778, 268, 344, 166, 499, 123, 22, 82, 947, 111, 427, 577, 809, 511, 640, 802, 676, 724, 484, 224, 496, 698, 489, 826, 381, 86, 818, 258, 843, 760, 924, 1, 64, 283, 811, 83, 254, 59, 93, 895, 694, 454, 781, 370, 249, 606, 201, 236, 825, 366, 565, 883, 651, 315, 395, 479, 256, 245, 35, 382, 620, 22, 528, 368, 918, 386, 707, 621, 945, 536, 468, 230, 259, 336, 454, 698, 204, 405, 747, 890, 249, 229, 392, 775, 706, 766, 65, 298, 960, 163, 928, 300, 380, 376, 202, 567, 763, 194, 378, 709, 374, 507, 643, 719, 634, 204, 296, 369, 138, 171, 678, 988, 238, 248, 581, 84, 518, 818, 994, 523, 967, 688, 537, 853, 490, 213, 193, 278, 913, 963, 712, 641, 843, 715, 577, 979, 162, 611, 2, 559, 19, 193, 91, 738, 126, 768, 524, 218, 143, 728, 839, 611, 796, 379, 678, 250, 519, 717, 910, 933, 798, 124, 604, 314, 698, 465, 622, 840, 845, 588, 813, 739, 551, 783, 473, 796, 906, 540, 462, 488, 372, 776, 414, 1000, 622, 668, 480, 761, 307, 562, 223, 412, 971, 749, 334, 921, 945, 780, 826, 47, 33, 736, 744, 751, 941, 508, 545, 499, 690, 957, 642, 272, 735, 265, 769, 811, 974, 397, 150, 260, 430, 209, 398, 812, 800, 551, 190, 20, 400, 709, 702, 633, 431, 599, 891, 499, 135, 496, 649, 165, 174, 50, 393, 546, 30, 524, 344, 149, 36, 275, 904, 217, 432, 685, 395, 675, 844, 114, 772, 5, 313, 395, 385, 772, 399, 360, 662, 253, 811, 596, 595, 867, 941, 492, 586, 116, 794, 904, 737, 333, 40, 961, 807, 938, 896, 732, 869, 530, 481, 733, 225, 331, 507, 400, 475, 626, 880, 843, 242, 582, 154, 984, 887, 822, 465, 898, 173, 855, 299, 782, 550, 594, 641, 444, 466, 254, 608, 654, 636, 586, 973, 809, 5, 821, 701, 145, 501, 570, 172, 281, 894, 422, 84, 91, 652, 996, 32, 221, 882, 3, 785, 558, 471, 686, 81, 199, 33, 436, 622, 244, 208, 801, 705, 381, 414, 597, 192, 776, 149, 428, 993, 546, 195, 773, 256, 838, 250, 806, 123, 357, 754, 865, 531, 423, 722, 40, 486, 496, 204, 750, 963, 854, 722, 817, 645, 666, 230, 146, 708, 997, 806, 7, 648, 917, 727, 468, 831, 473, 433, 885, 729, 841, 372, 343, 19, 57, 849, 304, 105, 855, 524, 827, 159, 323, 80, 488, 185, 519, 844, 556, 249, 999, 549, 333, 25, 315, 924, 705, 474, 731, 185, 312, 572, 850, 168, 406, 231, 701, 395, 109, 538, 134, 312, 435, 705, 820, 813, 888, 300, 205, 193, 443, 782, 767, 852, 573, 436, 300, 762, 750, 279, 372, 347, 382, 418, 199, 583, 391, 424, 315, 833, 1, 504, 594, 665, 334, 907, 464, 142, 536, 320, 860, 988, 559, 317, 77, 650, 951, 544, 607, 527, 697, 686, 717, 991, 377, 925, 881, 368, 928, 53, 186, 258, 275, 77, 909, 294, 188, 731, 704, 685, 936, 459, 795, 789, 488, 292, 424, 272, 67, 366, 844, 285, 476, 265, 38, 115, 256, 867, 759, 587, 787, 80, 859, 534, 907, 983, 159, 919, 725, 186, 243, 57, 39, 54, 195, 932, 878, 188, 632, 509, 809, 271, 28, 179, 382, 926, 470, 881, 195, 373, 338, 385, 31, 735, 133, 613, 394, 303, 528, 340, 274, 16, 42, 267, 247, 792, 419, 66, 210, 452, 14, 313, 441, 49, 583, 898, 6, 247, 870, 376, 354, 690, 834, 913, 556, 684, 369, 448, 606, 701, 911, 134, 993, 932, 389, 714, 711, 251, 700, 382, 330, 38, 442, 332, 284, 308, 572, 209, 542, 74, 349, 153, 573, 724, 30, 171, 393, 397, 415, 382, 936, 264, 308, 724, 339, 920, 755, 798, 727, 357, 677, 152, 919, 632, 275, 143, 32, 778, 932, 888, 549, 528, 580, 387, 676, 193, 886, 935, 104, 546, 142, 687, 224, 898, 896, 542, 905, 930, 477, 311, 879, 160, 167, 425, 954, 660, 666, 713, 134, 609, 310, 560, 115, 928, 490, 486, 703, 938, 308, 526, 384, 309, 982, 100, 759, 161, 955, 869, 113, 187, 842, 974, 664, 58, 90, 328, 777, 280, 23, 242, 255, 234, 691, 623, 464, 100, 800, 18, 374, 455, 533, 111, 689, 365, 856, 980, 579, 198, 708, 760, 685, 115, 235, 202, 792, 107, 309, 533, 566, 925, 545, 91, 505, 509, 2, 560, 116, 370, 486, 480, 393, 592, 980, 635, 915, 593, 476, 687, 870, 41, 20, 815, 707, 178, 991, 572, 424, 949, 24, 257, 95, 762, 688, 547, 214, 410, 276, 624, 959, 35, 315, 527, 913, 548, 703, 585, 719, 450, 809, 206, 566, 74, 394, 483, 869, 807, 7, 586, 240, 110, 380, 795, 438, 161, 469, 58, 157, 497, 721, 153, 713, 663, 776, 279, 300, 645, 934, 529, 355, 520, 848, 216, 589, 336, 975, 987, 922, 404, 203, 982, 833, 704, 697, 219, 34, 296, 624, 537, 93, 217, 952, 26, 395, 790, 452, 785, 908, 321, 242, 347, 680, 498, 145, 325, 770, 685, 546, 95, 681, 639, 754, 352, 241, 265, 862, 914, 155, 776, 216, 55, 232, 140, 458, 667, 923, 455, 648, 484, 767, 905, 675, 928, 150, 210, 739, 838, 157, 631, 604, 656, 100, 457, 396, 750, 490, 378, 476, 575, 904, 481, 30, 380, 229, 184, 902, 581, 746, 204, 227, 280, 127, 308, 384, 7, 750, 822, 694, 218, 549, 503, 213, 61, 426, 466, 586, 930, 587, 282, 779, 210, 219, 27, 177, 440, 724, 926, 53, 47, 681, 779, 310, 6, 450, 332, 394, 864, 366, 167, 867, 857, 196, 821, 612, 14, 507, 81, 108, 36, 219, 107, 882, 139, 635, 533, 722, 92, 805, 989, 390, 425, 606, 965, 41, 421, 186, 895, 672, 324, 184, 117, 370, 843, 257, 920, 985, 995, 791, 920, 466, 674, 524, 795, 73, 691, 752, 89, 592, 119, 776, 423, 498, 852, 3, 282, 819, 677, 926, 503, 59, 522, 218, 280, 338, 961, 412, 258, 854, 333, 22, 637, 490, 614, 389, 947, 513, 41, 770, 821, 668, 538, 157, 626, 369, 311, 182, 449, 605, 927, 318, 82, 338, 906, 622, 232, 700, 850, 21, 409, 144, 363, 80, 89, 735, 551, 382, 515, 538, 142, 490, 522, 390, 220, 916, 119, 634, 794, 57, 460, 846, 946, 386, 377, 862, 469, 307, 284, 407, 919, 661, 838, 730, 270, 142, 868, 311, 646, 286, 571, 355, 561, 238, 792, 685, 269, 469, 774, 101, 374, 835, 809, 551, 438, 905, 19, 463, 746, 88, 557, 132, 199, 890, 361, 818, 12, 750, 373, 354, 682, 103, 307, 349, 570, 15, 966, 810, 181, 752, 351, 452, 434, 860, 729, 983, 339, 101, 994, 308, 353, 311, 835, 643, 186, 949, 146, 328, 631, 513, 902, 489, 907, 816, 34, 776, 593, 350, 582, 972, 149, 845, 962, 4, 902, 540, 188, 663, 210, 182, 708, 509, 219, 223, 942, 195, 768, 294, 16, 517, 943, 872, 325, 668, 265, 322, 417, 66, 295, 601, 446, 244, 60, 813, 70, 24, 482, 115, 122, 134, 74, 34, 850, 52, 278, 832, 670, 68, 530, 598, 380, 585, 74, 865, 715, 562, 325, 499, 8, 294, 419, 497, 871, 881, 962, 702, 564, 878, 727, 889, 738, 269, 116, 530, 300, 326, 317, 50, 314, 567, 519, 515, 999, 371, 234, 366, 648, 404, 886, 212, 943, 634, 21, 599, 905, 700, 832, 242, 380, 342, 500, 302, 749, 892, 214, 990, 754, 366, 893, 317, 675, 20, 407, 615, 54, 588, 407, 77, 668, 682, 677, 5, 14, 743, 934, 762, 795, 77, 341, 375, 878, 369, 906, 858, 836, 154, 410, 182, 795, 842, 648, 209, 522, 778, 331, 216, 316, 123, 887, 304, 126, 906, 48, 639, 596, 844, 837, 977, 599, 107, 89, 31, 2, 15, 432, 125, 413, 928, 440, 627, 897, 370, 765, 367, 356, 986, 586, 88, 904, 273, 516, 182, 272, 615, 353, 88, 722, 874, 186, 70, 571, 910, 69, 817, 583, 511, 806, 39, 168, 413, 966, 291, 346, 671, 972, 725, 724, 276, 932, 446, 825, 437, 981, 142, 928, 367, 568, 546, 8, 872, 981, 392, 704, 936, 504, 324, 270, 498, 604, 600, 759, 298, 814, 288, 855, 641, 78, 892, 601, 839, 754, 257, 208, 960, 211, 522, 119, 515, 899, 419, 958, 55, 535, 199, 30, 582, 778, 594, 904, 255, 179, 641, 576, 62, 40, 552, 720, 279, 898, 4, 2, 355, 434, 635, 533, 290, 749, 185, 372, 666, 180, 797, 660, 278, 7, 43, 13, 347, 436, 882, 906, 167, 962, 128, 284, 210, 786, 397, 588, 530, 864, 262, 144, 297, 215, 211, 400, 586, 915, 131, 953, 453, 707, 518, 857, 270, 30, 76, 156, 676, 484, 660, 55, 97, 161, 791, 515, 734, 734, 886, 533, 977, 417, 536, 51, 161, 566, 65, 65, 345, 574, 888, 628, 763, 470, 336, 647, 471, 387, 50, 933, 348, 325, 848, 246, 478, 833, 260, 405, 953, 420, 762, 673, 77, 844, 692, 643, 466, 889, 957, 63, 470, 900, 352, 903, 277, 87, 522, 244, 656, 334, 781, 550, 625, 820, 582, 262, 221, 273, 697, 826, 675, 74, 755, 553, 229, 673, 729, 415, 757, 207, 631, 891, 810, 383, 787, 16, 466, 405, 260, 217, 546, 975, 917, 488, 332, 995, 214, 240, 808, 161, 397, 385, 966, 394, 40, 69, 938, 281, 478, 833, 833, 313, 815, 861, 84, 591, 986, 944, 59, 433, 718, 21, 196, 191, 706, 195, 780, 569, 312, 204, 660, 650, 951, 195, 983, 931, 777, 932, 116, 123, 605, 327, 55, 85, 918, 173, 117, 331, 339, 934, 40, 106, 280, 466, 143, 709, 996, 854, 305, 654, 893, 762, 843, 507, 321, 105, 841, 6, 574, 816, 618, 895, 837, 602, 271, 405, 562, 379, 212, 259, 375, 436, 952, 520, 778, 478, 258, 266, 932, 923, 573, 363, 187, 409, 829, 276, 530, 232, 442, 561, 487, 439, 636, 142, 38, 330, 120, 313, 820, 382, 11, 111, 615, 704, 59, 3, 492, 107, 590, 444, 256, 824, 197, 895, 643, 763, 961, 581, 202, 131, 482, 239, 20, 642, 772, 718, 368, 454, 266, 239, 749, 512, 327, 864, 17, 891, 955, 276, 686, 287, 826, 837, 850, 718, 588, 219, 390, 790, 528, 55, 25, 625, 146, 837, 198, 689, 567, 258, 587, 888, 863, 618, 619, 911, 850, 341, 303, 493, 486, 986, 608, 538, 64, 885, 352, 37, 712, 925, 74, 579, 154, 945, 823, 809, 946, 621, 723, 124, 440, 935, 519, 278, 156, 735, 152, 612, 980, 910, 327, 670, 524, 710, 650, 502, 269, 802, 540, 181, 793, 535, 257, 106, 638, 508, 180, 980, 881, 14, 212, 450, 677, 543, 356, 777, 580, 111, 746, 998, 916, 484, 475, 853, 430, 486, 957, 705, 355, 118, 485, 53, 544, 801, 713, 930, 724, 311, 584, 938, 208, 368, 569, 221, 742, 113, 122, 809, 428, 659, 91, 575, 107, 54, 34, 979, 891, 748, 887, 29, 570, 672, 394, 526, 237, 329, 972, 501, 494, 2, 820, 987, 742, 964, 611, 875, 508, 525, 138, 230, 951, 523, 250, 501, 337, 156, 819, 721, 84, 624, 18, 472, 641, 617, 541, 512, 167, 729, 705, 153, 433, 237, 270, 398, 556, 9, 904, 973, 719, 436, 626, 935, 955, 237, 574, 754, 565, 870, 16, 717, 977, 168, 836, 923, 865, 112, 261, 123, 655, 1000, 104, 39, 976, 289, 919, 717, 977, 175, 162, 963, 294, 813, 571, 790, 504, 499, 793, 427, 623, 589, 872, 647, 561, 598, 119, 853, 250, 701, 490, 207, 508, 303, 40, 735, 888, 669, 48, 222, 662, 759, 384, 108, 26, 936, 862, 929, 455, 468, 922, 43, 520, 16, 771, 625, 85, 362, 786, 856, 139, 401, 764, 420, 95, 29, 371, 865, 884, 505, 71, 162, 987, 288, 481, 98, 114, 630, 681, 921, 920, 233, 657, 169, 904, 632, 625, 801, 588, 530, 972, 410, 588, 842, 451, 313, 808, 730, 632, 244, 546, 702, 702, 57, 119, 682, 583, 203, 167, 798, 46, 141, 802, 41, 910, 28, 294, 764, 946, 297, 599, 640, 335, 348, 758, 434, 751, 15, 526, 350, 343, 738, 866, 939, 20, 394, 250, 558, 801, 816, 664, 120, 107, 935, 494, 604, 273, 198, 923, 516, 846, 735, 974, 619, 442, 158, 985, 129, 928, 854, 457, 834, 473, 401, 13, 744, 400, 167, 598, 458, 927, 449, 30, 357, 10, 613, 715, 26, 858, 141, 590, 536, 38, 475, 55, 628, 77, 608, 708, 726, 614, 662, 530, 213, 972, 338, 491, 190, 588, 870, 400, 857, 505, 733, 561, 276, 106, 761, 906, 340, 690, 137, 576, 321, 760, 383, 213, 218, 472, 426, 80, 33, 506, 6, 233, 56, 705, 541, 515, 891, 159, 200, 155, 920, 991, 422, 424, 261, 971, 697, 67, 809, 7, 428, 729, 142, 157, 289, 606, 637, 611, 155, 357, 938, 666, 192, 309, 17, 56, 657, 406, 546, 521, 661, 917, 441, 825, 618, 731, 473, 317, 477, 685, 321, 802, 765, 608, 47, 438, 299, 651, 61, 390, 460, 969, 874, 688, 26, 759, 986, 90, 152, 891, 856, 146, 188, 998, 211, 431, 82, 236, 846, 224, 663, 577, 229, 212, 323, 645, 469, 337, 715, 787, 59, 225, 661, 455, 584, 66, 821, 910, 779, 85, 144, 643, 607, 642, 991, 199, 182, 913, 622, 792, 167, 300, 781, 278, 276, 659, 167, 682, 311, 32, 650, 247, 966, 444, 894, 61, 124, 594, 857, 579, 834, 3, 570, 902, 662, 145, 12, 416, 699, 823, 238, 970, 761, 753, 865, 116, 671, 713, 409, 428, 325, 689, 647, 750, 439, 592, 415, 372, 327, 894, 918, 838, 361, 90, 790, 619, 662, 927, 932, 496, 569, 234, 745, 440, 270, 159, 217, 213, 548, 692, 353, 774, 808, 382, 756, 577, 900, 195, 903, 147, 872, 192, 523, 550, 192, 972, 747, 618, 557, 324, 703, 847, 297, 360, 849, 282, 341, 390, 110, 175, 205, 598, 118, 245, 367, 478, 527, 32, 935, 230, 855, 323, 679, 311, 697, 372, 317, 791, 507, 132, 845, 736, 709, 671, 9, 403, 372, 985, 238, 918, 15, 402, 633, 182, 714, 780, 154, 177, 17, 906, 752, 122, 887, 939, 820, 370, 433, 447, 730, 141, 788, 265, 334, 700, 142, 886, 299, 313, 259, 445, 2, 584, 982, 87, 753, 107, 499, 185, 634, 814, 250, 783, 557, 277, 503, 444, 304, 859, 992, 247, 278, 525, 591, 832, 143, 46, 393, 972, 223, 956, 38, 429, 216, 754, 721, 909, 412, 791, 722, 444, 581, 487, 754, 273, 952, 553, 327, 461, 59, 329, 377, 430, 42, 735, 644, 218, 936, 207, 359, 434, 691, 410, 892, 114, 313, 166, 985, 110, 618, 329, 983, 182, 550, 195, 561, 773, 233, 21, 798, 487, 483, 468, 555, 514, 261, 475, 187, 518, 457, 448, 440, 31, 849, 973, 591, 83, 195, 386, 30, 415, 76, 569, 1, 663, 938, 2, 902, 942, 854, 200, 550, 658, 58, 724, 765, 739, 103, 665, 419, 933, 459, 863, 4, 317, 1000, 924, 325, 561, 920, 584, 544, 346, 952, 271, 386, 326, 923, 36, 50, 689, 737, 364, 29, 53, 575, 681, 216, 906, 665, 209, 821, 839, 540, 150, 691, 97, 145, 223, 335, 179, 551, 990, 255, 679, 273, 947, 560, 948, 456, 26, 245, 721, 193, 928, 572, 89, 906, 755, 620, 535, 969, 691, 66, 19, 79, 68, 340, 205, 675, 45, 285, 442, 929, 438, 626, 518, 828, 21, 140, 785, 873, 66, 463, 532, 231, 828, 866, 125, 164, 195, 193, 473, 737, 679, 408, 362, 529, 745, 832, 33, 214, 552, 886, 30, 741, 591, 90, 917, 731, 438, 22, 427, 751, 781, 720, 106, 554, 680, 721, 162, 308, 79, 887, 57, 849, 189, 455, 931, 124, 372, 783, 693, 779, 351, 812, 262, 987, 945, 119, 495, 397, 820, 293, 645, 977, 163, 695, 221, 258, 316, 831, 839, 843, 552, 621, 182, 880, 222, 705, 967, 175, 743, 241, 855, 848, 499, 781, 98, 676, 59, 617, 890, 562, 240, 395, 845, 520, 37, 878, 674, 135, 784, 246, 205, 351, 127, 820, 465, 334, 688, 772, 813, 539, 945, 62, 450, 759, 266, 634, 908, 663, 399, 528, 767, 963, 755, 814, 844, 890, 825, 955, 291, 442, 348, 132, 947, 426, 914, 180, 849, 107, 20, 626, 222, 383, 202, 837, 428, 384, 141, 867, 233, 580, 188, 763, 45, 495, 867, 767, 329, 145, 17, 887, 152, 826, 488, 9, 394, 740, 323, 597, 535, 96, 563, 121, 353, 651, 802, 128, 533, 682, 828, 560, 188, 371, 19, 739, 668, 982, 66, 750, 700, 653, 699, 601, 129, 864, 597, 287, 282, 43, 592, 7, 210, 588, 644, 465, 775, 135, 865, 229, 999, 845, 479, 680, 131, 61, 850, 608, 910, 641, 518, 915, 927, 324, 25, 67, 117, 58, 353, 724, 754, 329, 99, 9, 124, 263, 574, 220, 928, 404, 112, 709, 383, 225, 999, 317, 990, 449, 402, 258, 225, 455, 609, 765, 920, 920, 514, 915, 36, 146, 582, 970, 595, 973, 515, 549, 546, 802, 811, 600, 659, 337, 325, 103, 200, 103, 666, 373, 870, 879, 67, 81, 397, 496, 705, 694, 231, 440, 750, 818, 63, 952, 858, 255, 996, 592, 112, 465, 774, 507, 98, 407, 993, 127, 657, 221, 55, 454, 818, 945, 819, 544, 765, 205, 3, 837, 624, 444, 53, 501, 916, 720, 398, 66, 439, 468, 22, 113, 226, 406, 592, 149, 90, 327, 57, 508, 556, 69, 279, 414, 165, 945, 452, 411, 249, 261, 339, 405, 861, 880, 754, 726, 30, 229, 568, 474, 331, 848, 913, 80, 560, 987, 111, 421, 429, 401, 156, 762, 839, 929, 758, 48, 709, 172, 330, 993, 637, 850, 260, 896, 432, 218, 573, 51, 171, 761, 518, 319, 224, 221, 548, 510, 652, 562, 164, 413, 434, 788, 233, 249, 152, 815, 868, 883, 361, 780, 420, 880, 651, 844, 878, 630, 33, 561, 158, 492, 787, 699, 591, 210, 253, 833, 447, 33, 333, 753, 143, 444, 177, 770, 641, 103, 209, 479, 778, 839, 16, 807, 795, 210, 537, 315, 99, 88, 808, 367, 31, 610, 622, 164, 548, 146, 305, 517, 771, 292, 340, 617, 463, 227, 642, 513, 372, 78, 321, 179, 448, 300, 252, 646, 238, 663, 913, 374, 80, 749, 117, 746, 653, 508, 325, 548, 244, 127, 950, 225, 624, 772, 935, 786, 796, 169, 101, 770, 57, 398, 167, 137, 325, 275, 396, 809, 638, 997, 994, 103, 8, 950, 72, 627, 131, 603, 302, 675, 256, 242, 971, 261, 213, 739, 215, 556, 71, 606, 203, 181, 504, 133, 189, 851, 650, 3, 456, 927, 523, 750, 828, 84, 89, 257, 929, 58, 671, 854, 866, 177, 720, 578, 136, 353, 155, 768, 180, 263, 544, 802, 346, 970, 627, 437, 730, 319, 454, 885, 656, 986, 596, 537, 758, 102, 323, 400, 465, 511, 425, 301, 89, 653, 795, 615, 893, 508, 705, 747, 591, 210, 190, 182, 147, 785, 47, 701, 966, 206, 490, 16, 204, 624, 201, 519, 266, 749, 735, 35, 134, 505, 186, 760, 948, 673, 898, 529, 906, 695, 64, 109, 342, 206, 546, 401, 670, 89, 959, 166, 601, 519, 838, 884, 988, 66, 324, 399, 127, 816, 69, 745, 609, 985, 618, 128, 713, 75, 468, 425, 823, 930, 768, 597, 627, 795, 404, 507, 196, 3, 265, 615, 243, 932, 65, 209, 881, 656, 122, 961, 253, 601, 396, 42, 11, 712, 328, 844, 26, 436, 970, 334, 973, 885, 296, 499, 772, 25, 579, 709, 219, 231, 509, 912, 28, 387, 299, 336, 201, 626, 862, 765, 84, 366, 813, 134, 210, 99, 797, 892, 821, 67, 659, 216, 434, 584, 1, 184, 635, 680, 911, 678, 917, 365, 108, 929, 228, 101, 389, 72, 485, 23, 750, 684, 428, 416, 671, 158, 992, 149, 376, 569, 404, 786, 280, 960, 431, 402, 410, 27, 206, 279, 265, 14, 985, 581, 654, 387, 179, 722, 279, 922, 485, 89, 98, 669, 694, 23, 579, 409, 124, 285, 130, 249, 910, 375, 904, 381, 477, 604, 924, 20, 543, 80, 529, 246, 30, 246, 610, 13, 817, 938, 96, 12, 634, 110, 163, 449, 584, 427, 936, 111, 357, 978, 458, 551, 539, 891, 324, 992, 994, 574, 582, 932, 765, 609, 614, 61, 878, 9, 848, 383, 607, 636, 833, 704, 114, 799, 305, 62, 403, 139, 935, 952, 357, 357, 937, 472, 858, 358, 124, 463, 624, 816, 601, 538, 128, 595, 457, 843, 568, 711, 650, 618, 683, 514, 666, 750, 327, 684, 827, 94, 824, 176, 24, 13, 771, 902, 319, 254, 733, 304, 911, 164, 989, 418, 604, 766, 184, 805, 785, 904, 124, 237, 702, 613, 942, 930, 634, 364, 816, 948, 138, 977, 581, 755, 906, 837, 231, 749, 691, 984, 163, 993, 318, 622, 395, 355, 88, 248, 85, 209, 47, 717, 18, 134, 796, 881, 185, 285, 497, 924, 412, 129, 821, 149, 708, 362, 77, 361, 49, 82, 86, 295, 444, 192, 768, 62, 129, 261, 421, 1, 815, 45, 18, 985, 402, 65, 437, 404, 507, 483, 40, 733, 861, 881, 101, 132, 139, 989, 59, 216, 985, 508, 943, 594, 472, 406, 174, 635, 695, 814, 450, 48, 958, 754, 731, 805, 180, 813, 464, 552, 67, 859, 71, 792, 658, 213, 609, 222, 108, 62, 161, 498, 319, 988, 807, 137, 976, 875, 8, 653, 276, 351, 592, 726, 162, 584, 242, 664, 704, 747, 662, 700, 163, 559, 189, 492, 211, 21, 618, 561, 446, 579, 418, 159, 243, 602, 629, 956, 282, 343, 461, 661, 42, 327, 438, 449, 675, 215, 862, 818, 774, 891, 687, 537, 154, 925, 251, 457, 680, 552, 40, 303, 48, 973, 188, 152, 165, 14, 306, 396, 15, 290, 821, 58, 376, 552, 525, 411, 578, 367, 696, 147, 406, 621, 834, 62, 231, 574, 672, 471, 673, 712, 194, 679, 180, 180, 319, 588, 478, 312, 837, 344, 703, 163, 329, 476, 110, 952, 956, 884, 549, 191, 103, 692, 601, 664, 112, 587, 420, 322, 821, 711, 478, 451, 40, 2, 169, 640, 452, 972, 484, 399, 631, 536, 403, 451, 553, 707, 524, 577, 780, 146, 565, 648, 4, 724, 37, 638, 96, 201, 112, 25, 162, 584, 903, 146, 716, 591, 943, 529, 483, 270, 776, 69, 504, 949, 1, 611, 316, 240, 651, 593, 452, 95, 971, 667, 806, 675, 379, 509, 539, 838, 227, 506, 878, 891, 668, 757, 227, 78, 494, 758, 867, 148, 323, 1000, 911, 174, 291, 64, 699, 490, 433, 288, 533, 635, 709, 373, 710, 138, 972, 902, 369, 445, 821, 326, 713, 895, 477, 900, 992, 175, 182, 513, 549, 430, 379, 457, 949, 811, 823, 277, 573, 497, 567, 304, 295, 748, 21, 705, 940, 168, 910, 489, 385, 43, 782, 550, 436, 20, 483, 774, 297, 139, 663, 176, 264, 330, 114, 591, 889, 773, 519, 681, 835, 838, 197, 935, 113, 964, 514, 566, 207, 213, 971, 366, 795, 202, 63, 743, 535, 618, 820, 933, 142, 1, 729, 636, 237, 66, 143, 908, 876, 819, 898, 675, 637, 408, 148, 527, 772, 355, 627, 59, 551, 186, 914, 980, 448, 337, 446, 676, 593, 970, 306, 351, 96, 178, 701, 52, 19, 477, 369, 30, 461, 717, 776, 468, 922, 103, 762, 846, 927, 839, 98, 865, 734, 390, 178, 132, 600, 336, 316, 924, 683, 51, 507, 821, 439, 788, 33, 786, 651, 636, 306, 471, 837, 548, 104, 932, 658, 980, 297, 13, 947, 578, 566, 328, 841, 361, 189, 510, 378, 472, 426, 726, 133, 229, 905, 23, 322, 569, 246, 468, 965, 470, 521, 325, 604, 702, 132, 979, 71, 22, 991, 267, 536, 347, 199, 832, 451, 260, 354, 154, 855, 24, 286, 131, 829, 873, 962, 988, 306, 33, 693, 699, 48, 907, 958, 576, 537, 886, 707, 256, 174, 141, 534, 970, 341, 699, 765, 728, 161, 709, 225, 992, 207, 352, 313, 387, 918, 206, 360, 406, 822, 538, 324, 119, 245, 36, 849, 330, 749, 577, 509, 149, 242, 946, 597, 64, 114, 729, 400, 641, 366, 263, 874, 303, 553, 593, 988, 14, 566, 916, 226, 547, 479, 222, 157, 32, 995, 335, 338, 41, 295, 873, 818, 776, 336, 668, 764, 918, 552, 613, 304, 628, 712, 631, 53, 721, 117, 730, 622, 500, 198, 619, 440, 804, 292, 997, 575, 317, 691, 519, 553, 55, 872, 109, 747, 762, 11, 307, 907, 716, 223, 303, 741, 783, 872, 991, 266, 764, 300, 987, 590, 604, 797, 860, 257, 689, 150, 621, 257, 288, 516, 457, 302, 66, 47, 701, 470, 235, 913, 720, 273, 298, 334, 832, 576, 706, 309, 910, 161, 73, 142, 973, 638, 287, 836, 110, 991, 65, 581, 400, 21, 759, 679, 183, 145, 122, 101, 610, 764, 523, 874, 993, 632, 320, 38, 775, 39, 967, 743, 884, 139, 640, 322, 535, 109, 549, 346, 770, 865, 222, 288, 181, 210, 819, 947, 192, 323, 929, 650, 875, 6, 225, 824, 841, 431, 629, 822, 252, 891, 100, 152, 410, 582, 576, 929, 601, 643, 822, 848, 167, 552, 726, 383, 125, 536, 756, 41, 372, 58, 774, 717, 81, 402, 214, 408, 437, 871, 122, 351, 232, 797, 451, 837, 303, 787, 651, 458, 179, 712, 346, 653, 93, 706, 106, 852, 703, 311, 898, 777, 76, 255, 832, 502, 354, 457, 26, 604, 655, 294, 583, 465, 922, 947, 26, 593, 148, 803, 911, 278, 518, 692, 560, 98, 196, 968, 170, 548, 163, 911, 772, 690, 583, 571, 400, 78, 368, 580, 773, 340, 526, 333, 452, 875, 146, 135, 410, 698, 919, 588, 365, 932, 481, 951, 410, 543, 125, 122, 918, 810, 369, 312, 411, 877, 565, 340, 590, 693, 643, 706, 231, 640, 242, 764, 985, 166, 737, 751, 82, 296, 290, 856, 837, 605, 709, 761, 574, 603, 919, 472, 397, 540, 658, 554, 351, 921, 159, 116, 474, 698, 705, 370, 984, 15, 692, 116, 325, 865, 606, 789, 868, 716, 93, 533, 38, 121, 153, 226, 5, 919, 314, 771, 849, 586, 981, 509, 864, 199, 428, 433, 403, 158, 164, 478, 583, 233, 459, 363, 969, 140, 209, 768, 254, 614, 86, 229, 266, 711, 309, 978, 855, 458, 975, 449, 328, 437, 67, 954, 190, 646, 364, 741, 619, 473, 171, 461, 549, 391, 55, 931, 69, 801, 315, 112, 1, 901, 495, 535, 239, 480, 753, 554, 779, 141, 493, 460, 243, 221, 722, 887, 376, 151, 352, 239, 784, 986, 959, 655, 674, 537, 385, 226, 593, 526, 235, 772, 605, 746, 935, 723, 726, 475, 838, 784, 707, 679, 620, 898, 426, 705, 532, 749, 368, 162, 775, 343, 611, 145, 535, 691, 254, 814, 816, 106, 933, 707, 361, 838, 834, 876, 487, 585, 919, 617, 995, 870, 765, 345, 573, 381, 292, 66, 161, 509, 452, 918, 641, 381, 700, 111, 219, 267, 784, 319, 644, 409, 296, 305, 861, 461, 887, 276, 854, 56, 362, 465, 432, 538, 586, 899, 727, 204, 379, 655, 47, 501, 581, 148, 654, 969, 306, 612, 875, 214, 34, 243, 326, 121, 780, 760, 216, 857, 774, 186, 740, 826, 950, 756, 670, 190, 841, 124, 386, 342, 573, 929, 712, 591, 979, 139, 447, 99, 967, 87, 448, 429, 506, 499, 781, 281, 831, 847, 217, 610, 701, 405, 241, 30, 469, 330, 76, 216, 100, 597, 783, 829, 419, 287, 220, 313, 373, 668, 347, 283, 177, 617, 657, 870, 441, 790, 321, 73, 322, 286, 969, 369, 381, 453, 614, 21, 285, 738, 258, 682, 274, 149, 845, 536, 45, 466, 177, 965, 461, 534, 75, 481, 17, 385, 71, 634, 815, 845, 955, 897, 405, 903, 350, 916, 262, 179, 578, 597, 191, 869, 441, 411, 706];
console.log(trappingWater(input, input.length));
console.timeEnd('execution_time');