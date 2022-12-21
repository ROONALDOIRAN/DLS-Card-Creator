const settings = document.getElementById('settings');
settings.addEventListener('input', (event) => drawCard());

if (screen.width < 510) {
    document.getElementById('card').style = 'width:90%;';
}
if (screen.width < 750) {
    document.getElementById('buttons').style = 'position:relative;';
}

for (var i = 0; i <= 182; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    document.getElementById('nationality').appendChild(opt);
}
document.getElementById('nationality').value = '140';

var playerIDs = [1, 9, 12, 17, 19, 30, 33, 35, 36, 37, 53, 74, 91, 97, 125, 138, 139, 147, 149, 150, 152, 153, 165, 166, 168, 173, 175, 176, 181, 182, 187, 188, 207, 214, 222, 233, 252, 254, 258, 275, 317, 321, 325, 327, 328, 363, 368, 369, 370, 372, 382, 386, 392, 406, 408, 414, 422, 447, 448, 452, 456, 506, 510, 512, 514, 515, 520, 524, 541, 543, 545, 548, 563, 582, 662, 673, 772, 776, 786, 898, 919, 1023, 1026, 1035, 1041, 1052, 1058, 1079, 1096, 1103, 1109, 1123, 1133, 1148, 1155, 1157, 1167, 1170, 1187, 1201, 1202, 1213, 1216, 1218, 1224, 1229, 1230, 1233, 1240, 1244, 1251, 1261, 1275, 1276, 1299, 1424, 1490, 1492, 1497, 1498, 1499, 1551, 1581, 1728, 1732, 1735, 1787, 1788, 1866, 1873, 1892, 1902, 1924, 1925, 1929, 1944, 1972, 2130, 2139, 2178, 2181, 2184, 2185, 2193, 2201, 2210, 2234, 2258, 2287, 2313, 2333, 2335, 2340, 2344, 2346, 2347, 2353, 2354, 2360, 2364, 2373, 2382, 2384, 2386, 2406, 2409, 2413, 2429, 2451, 2452, 2458, 2469, 2471, 2493, 2494, 2496, 2505, 2509, 2517, 2531, 2559, 2563, 2566, 2567, 2570, 2591, 2592, 2594, 2599, 2602, 2619, 2641, 2651, 2663, 2692, 2700, 2705, 2727, 2746, 2761, 2773, 2796, 2830, 2842, 2899, 2921, 2923, 2938, 2962, 2976, 3094, 3120, 3128, 3179, 3288, 3333, 3361, 3385, 3386, 3402, 3403, 3432, 3465, 3544, 3549, 3575, 3596, 3603, 3624, 3631, 3636, 3642, 3648, 3659, 3663, 3665, 3673, 3703, 3715, 3737, 3745, 3750, 3759, 3799, 3811, 3828, 3843, 3850, 3854, 3867, 3874, 3880, 3881, 3882, 3886, 3887, 3894, 3983, 3984, 4011, 4016, 4020, 4031, 4039, 4044, 4050, 4053, 4054, 4057, 4061, 4066, 4079, 4083, 4090, 4095, 4103, 4117, 4120, 4177, 4203, 4224, 4228, 4229, 4231, 4237, 4241, 4243, 4257, 4258, 4262, 4264, 4267, 4278, 4287, 4288, 4298, 4302, 4307, 4308, 4328, 4334, 4352, 4354, 4355, 4391, 4407, 4410, 4444, 4461, 4463, 4466, 4476, 4484, 4491, 4492, 4493, 4505, 4509, 4518, 4521, 4525, 4535, 4556, 4600, 4608, 4622, 4625, 4627, 4648, 4683, 4686, 4690, 4697, 4704, 4711, 4712, 4721, 4724, 4736, 4739, 4764, 4796, 4797, 4806, 4882, 4884, 4990, 5002, 5018, 5028, 5032, 5033, 5041, 5047, 5052, 5055, 5056, 5064, 5084, 5108, 5116, 5130, 5145, 5156, 5169, 5215, 5264, 5282, 5294, 5296, 5300, 5303, 5306, 5307, 5309, 5313, 5314, 5324, 5332, 5333, 5337, 5338, 5343, 5345, 5346, 5347, 5356, 5366, 5373, 5377, 5379, 5383, 5384, 5388, 5389, 5391, 5394, 5398, 5403, 5404, 5405, 5416, 5427, 5428, 5436, 5440, 5471, 5478, 5484, 5486, 5487, 5489, 5493, 5495, 5499, 5506, 5512, 5536, 5546, 5553, 5592, 5906, 5917, 5918, 5925, 5936, 5954, 5963, 5965, 5970, 5987, 5989, 5996, 5998, 6002, 6017, 6018, 6052, 6113, 6125, 6127, 6156, 6230, 6238, 6239, 6240, 6242, 6251, 6274, 6284, 6287, 6288, 6289, 6370, 6376, 6409, 6422, 6431, 6434, 6438, 6449, 6458, 6464, 6469, 6480, 6496, 6499, 6501, 6505, 6515, 6551, 6553, 6554, 6556, 6561, 6567, 6571, 6573, 6576, 6665, 6668, 6674, 6675, 6677, 6683, 6685, 6703, 6704, 6708, 6713, 6715, 6717, 6721, 6731, 6735, 6739, 6746, 6747, 6752, 6768, 6785, 6793, 6794, 6841, 6844, 6846, 6858, 6861, 6869, 6874, 6876, 6878, 6880, 6884, 6893, 6894, 6905, 6912, 6913, 6916, 6921, 6930, 6932, 6941, 6943, 6945, 6953, 6956, 6962, 6977, 6990, 6991, 6993, 7024, 7029, 7047, 7049, 7052, 7053, 7057, 7067, 7072, 7075, 7076, 7080, 7083, 7093, 7106, 7134, 7138, 7152, 7162, 7170, 7206, 7207, 7209, 7213, 7214, 7218, 7253, 7271, 7272, 7274, 7278, 7280, 7292, 7293, 7297, 7307, 7317, 7321, 7333, 7345, 7347, 7349, 7360, 7362, 7368, 7372, 7379, 7382, 7384, 7387, 7389, 7390, 7392, 7394, 7399, 7400, 7402, 7403, 7404, 7406, 7408, 7413, 7415, 7428, 7431, 7435, 7438, 7439, 7441, 7449, 7455, 7456, 7458, 7462, 7467, 7468, 7469, 7481, 7484, 7494, 7495, 7496, 7505, 7507, 7509, 7510, 7525, 7541, 7542, 7544, 7546, 7553, 7554, 7558, 7583, 7592, 7595, 7604, 7609, 7617, 7647, 7668, 7669, 7671, 7698, 7700, 7704, 7710, 7741, 7759, 7760, 7764, 7767, 7768, 7801, 7805, 7821, 7822, 7823, 7840, 7844, 7846, 7851, 7853, 7855, 7856, 7858, 7883, 7885, 7902, 7904, 7911, 7932, 7933, 7935, 7957, 7958, 7979, 7981, 7986, 7988, 7990, 7994, 8003, 8005, 8008, 8009, 8011, 8019, 8024, 8027, 8037, 8042, 8048, 8055, 8101, 8102, 8128, 8425, 8441, 9127, 9131, 9136, 9167, 9225, 9291, 9299, 9368, 9406, 9429, 9443, 9447, 9449, 9454, 9457, 9460, 9461, 9462, 9467, 9480, 9482, 9483, 9487, 9492, 9496, 9501, 9508, 9512, 9518, 9522, 9524, 9526, 9536, 9544, 9548, 9553, 9560, 9562, 9565, 9566, 9568, 9569, 9572, 9574, 9575, 9576, 9580, 9583, 9584, 9587, 9592, 9599, 9600, 9605, 9610, 9612, 9613, 9619, 9627, 9632, 10047, 10048, 10073, 10074, 10093, 10094, 10097, 10111, 10115, 10118, 10119, 10120, 10155, 10159, 10162, 10173, 10174, 10175, 10176, 10188, 10196, 10197, 10200, 10202, 10204, 10208, 10210, 10212, 10215, 10216, 10223, 10224, 10225, 10232, 10237, 10240, 10244, 10247, 10261, 10262, 10280, 10284, 10288, 10297, 10314, 10317, 10321, 10324, 10325, 10332, 10333, 10339, 10341, 10344, 10345, 10353, 10356, 10357, 10366, 10372, 10377, 10379, 10398, 10399, 10400, 10403, 10408, 10409, 10412, 10414, 10430, 10432, 10433, 10440, 10448, 10452, 10464, 10615, 10620, 10627, 10629, 10636, 10656, 10678, 10695, 10721, 10728, 10732, 10747, 10753, 10765, 10766, 10767, 10772, 10806, 10808, 10810, 10811, 10812, 10822, 10839, 10864, 10883, 10936, 10946, 10947, 10949, 10958, 10959, 10975, 11033, 11034, 11038, 11040, 11041, 11061, 11063, 11064, 11065, 11067, 11071, 11082, 11084, 11086, 11093, 11095, 11097, 11102, 11103, 11104, 11107, 11113, 11114, 11126, 11129, 11140, 11142, 11148, 11151, 11157, 11160, 11161, 11162, 11166, 11167, 11168, 11169, 11236, 11239, 11247, 11253, 11256, 11259, 11276, 11303, 11304, 11314, 11324, 11337, 11346, 11347, 11359, 11364, 11365, 11366, 11367, 11379, 11382, 11390, 11393, 11397, 11438, 11440, 11468, 11469, 11473, 11474, 11475, 11499, 11504, 11505, 11506, 11519, 11520, 11522, 11523, 11524, 11526, 11532, 11535, 11542, 11547, 11550, 11555, 11559, 11562, 11567, 11570, 11575, 11580, 11581, 11588, 11589, 11595, 11604, 11605, 11610, 11617, 11621, 11623, 11624, 11626, 11631, 11632, 11633, 11634, 11636, 11637, 11638, 11640, 11642, 11646, 11647, 11650, 11652, 11654, 11655, 11667, 11675, 11683, 11686, 11690, 11692, 11693, 11704, 11706, 11708, 11714, 11717, 11720, 11725, 11734, 11738, 11742, 11745, 11751, 11755, 11757, 11767, 11788, 11790, 11795, 11796, 11821, 11823, 11830, 11845, 11848, 11850, 11851, 11852, 11854, 11866, 11876, 11878, 11879, 11882, 11891, 11894, 11905, 11907, 11908, 11917, 11934, 11958, 11970, 11980, 11986, 12027, 12029, 12044, 12046, 12047, 12052, 12053, 12059, 12072, 12126, 12127, 12148, 12164, 12172, 12179, 12194, 12199, 12200, 12201, 12202, 12203, 12224, 12225, 12226, 12262, 12299, 12304, 12324, 12326, 12330, 12334, 12335, 12336, 12338, 12341, 12342, 12344, 12349, 12353, 12370, 12372, 12374, 12375, 12376, 12377, 12381, 12382, 12383, 12384, 12385, 12387, 12389, 12394, 12395, 12399, 12401, 12403, 12404, 12407, 12411, 12412, 12414, 12415, 12420, 12421, 12425, 12426, 12427, 12428, 12429, 12433, 12434, 12439, 12446, 12455, 12457, 12458, 12459, 12460, 12461, 12463, 12464, 12465, 12466, 12479, 12480, 12481, 12485, 12487, 12489, 12492, 12496, 12497, 12499, 12580, 12581, 12582, 12584, 12591, 12593, 12598, 12599, 12600, 12602, 12603, 12605, 12608, 12612, 12614, 12619, 12621, 12631, 12632, 12637, 12642, 12643, 12644, 12645, 12648, 12657, 12659, 12666, 12669, 12670, 12671, 12672, 12677, 12680, 12682, 12684, 12690, 12693, 12695, 12696, 12699, 12700, 12701, 12703, 12704, 12707, 12709, 12713, 12716, 12718, 12722, 12728, 12735, 12738, 12740, 12744, 12747, 12748, 12751, 12752, 12753, 12755, 12757, 12758, 12761, 12766, 12767, 12778, 12779, 12780, 12783, 12789, 12790, 12791, 12793, 12796, 12801, 12806, 12816, 12817, 12824, 12833, 12835, 12841, 12842, 12844, 12845, 12847, 12849, 12855, 12861, 12868, 12879, 12886, 12893, 12901, 12904, 12905, 12918, 12927, 12943, 12946, 12947, 12957, 12959, 12961, 12968, 12969, 12970, 12972, 12973, 12979, 12980, 12984, 12992, 12994, 13001, 13004, 13005, 13009, 13012, 13020, 13024, 13025, 13027, 13040, 13041, 13043, 13057, 13066, 13067, 13068, 13073, 13074, 13083, 13085, 13093, 13096, 13097, 13099, 13102, 13126, 13130, 13147, 13154, 13161, 13166, 13177, 13180, 13183, 13184, 13185, 13186, 13193, 13196, 13197, 13243, 13250, 13251, 13297, 13302, 13304, 13305, 13307, 13309, 13354, 13355, 13357, 13693, 13710, 13717, 13718, 13722, 13726, 13727, 13728, 13729, 13730, 13731, 13732, 13734, 13737, 13740, 13742, 13743, 13744, 13746, 13747, 13748, 13749, 13751, 13753, 13755, 13756, 13758, 13759, 13760, 13762, 13763, 13764, 13768, 13773, 13774, 13775, 13777, 13778, 13779, 13784, 13800, 13802, 13803, 13805, 13806, 13807, 13808, 13809, 13811, 13812, 13814, 13816, 13817, 13821, 13823, 13829, 13845, 13849, 13851, 13852, 13854, 13855, 13856, 13858, 13863, 13864, 13867, 13868, 13871, 13872, 13877, 13880, 13881, 13882, 13883, 13886, 13897, 13899, 13901, 13903, 13906, 13912, 13913, 13914, 13923, 13926, 13927, 13934, 13938, 13939, 13942, 13945, 13948, 13949, 13950, 13953, 13957, 13959, 13960, 13963, 13964, 13965, 13966, 13976, 13979, 13980, 13981, 13983, 13992, 13996, 13997, 13999, 14008, 14009, 14010, 14011, 14033, 14034, 14036, 14038, 14039, 14041, 14045, 14049, 14053, 14057, 14058, 14060, 14061, 14062, 14064, 14065, 14066, 14067, 14078, 14082, 14099, 14100, 14123, 14124, 14126, 14129, 14132, 14139, 14140, 14141, 14143, 14145, 14153, 14155, 14165, 14182, 14183, 14184, 14186, 14190, 14192, 14197, 14199, 14201, 14203, 14204, 14205, 14209, 14222, 14225, 14226, 14227, 14229, 14233, 14235, 14236, 14239, 14241, 14242, 14245, 14255, 14259, 14262, 14270, 14271, 14273, 14275, 14284, 14304, 14305, 14308, 14309, 14313, 14315, 14318, 14319, 14320, 14322, 14324, 14325, 14326, 14327, 14334, 14335, 14337, 14342, 14344, 14346, 14347, 14348, 14349, 14355, 14361, 14363, 14365, 14366, 14368, 14370, 14371, 14372, 14379, 14382, 14386, 14389, 14390, 14397, 14400, 14401, 14402, 14403, 14411, 14413, 14423, 14428, 14448, 14459, 14480, 14482, 14484, 14485, 14486, 14487, 14488, 14498, 14505, 14509, 14522, 14523, 14525, 14556, 14558, 14559, 14594, 14605, 14607, 14609, 14634, 14638, 14639, 14640, 14644, 14647, 14648, 14649, 14650, 14652, 14653, 14654, 14655, 14656, 14673, 14674, 14676, 14683, 14686, 14709, 14715, 14723, 14727, 14728, 14730, 14731, 14733, 14734, 14735, 14738, 14739, 14742, 14754, 14755, 14756, 14774, 14775, 14776, 14784, 14787, 14794, 14799, 14805, 14806, 14813, 14814, 14815, 14816, 14817, 14819, 14825, 14838, 14848, 14851, 14854, 14860, 14866, 14867, 14868, 14869, 14871, 14872, 14873, 14876, 14877, 14880, 14881, 14883, 14885, 14890, 14891, 14892, 14893, 14895, 14896, 14898, 14899, 14900, 14902, 14905, 14906, 14907, 14909, 14911, 14913, 14916, 14918, 14920, 14928, 14930, 14934, 14935, 14938, 14939, 14942, 14943, 14944, 14949, 14950, 14951, 14952, 14953, 14954, 14955, 14956, 14957, 14961, 14962, 14965, 14966, 14967, 14968, 14969, 14974, 14975, 14977, 14981, 14982, 15033, 15040, 15043, 15045, 15046, 15047, 15082, 15083, 15089, 15090, 15091, 15092, 15093, 15095, 15097, 15100, 15103, 15105, 15112, 15114, 15117, 15118, 15124, 15125, 15128, 15130, 15132, 15133, 15134, 15137, 15139, 15140, 15142, 15145, 15147, 15148, 15155, 15160, 15162, 15163, 15166, 15171, 15173, 15174, 15177, 15178, 15180, 15181, 15183, 15185, 15189, 15193, 15195, 15200, 15204, 15208, 15210, 15212, 15214, 15220, 15222, 15223, 15225, 15226, 15227, 15228, 15229, 15234, 15238, 15244, 15245, 15246, 15248, 15250, 15254, 15256, 15257, 15265, 15267, 15268, 15269, 15270, 15271, 15275, 15282, 15284, 15287, 15291, 15292, 15294, 15295, 15297, 15298, 15300, 15301, 15302, 15303, 15304, 15305, 15306, 15307, 15311, 15312, 15379, 15380, 15382, 15383, 15384, 15385, 15396, 15397, 15398, 15400, 15401, 15402, 15403, 15437, 15455, 15456, 15457, 15458, 15461, 15462, 15463, 15465, 15467, 15537, 15539, 15540, 15541, 15542, 15543, 15544, 15545, 15546, 15547, 15548, 15549, 15551, 15552, 15553, 15554, 15555, 15556, 15557, 15558, 15559, 15561, 15562, 15564, 15565, 15566, 15567, 15568, 15569, 15570, 15571, 15572, 15577, 15579, 15580, 15581, 15582, 15583, 15584, 15587, 15589, 15590, 15591, 15592, 15594, 15596, 15597, 15598, 15600, 15608, 15610, 15615, 15616, 15617, 15618, 15619, 15621, 15622, 15623, 15625, 15626, 15627, 15628, 15629, 15630, 15631, 15632, 15634, 15635, 15637, 15638, 15641, 15642, 15643, 15646, 15648, 15649, 15653, 15654, 15657, 15658, 15659, 15660, 15663, 15664, 15666, 15668, 15669, 15674, 15675, 15676, 15678, 15679, 15680, 15681, 15684, 15685, 15688, 15691, 15697, 15698, 15700, 15701, 15702, 15704, 15705, 15706, 15714, 15716, 15719, 15722, 15723, 15724, 15726, 15728, 15729, 15731, 15733, 15734, 15735, 15741, 15744, 15745, 15746, 15747, 15748, 15750, 15751, 15752, 15758, 15760, 15761, 15765, 15766, 15767, 15770, 15771, 15773, 15774, 15777, 15783, 15786, 15790, 15791, 15795, 15796, 15797, 15798, 15800, 15801, 15803, 15808, 15809, 15810, 15812, 15815, 15816, 15824, 15828, 15830, 15831, 15832, 15833, 15834, 15835, 15836, 15837, 15838, 15844, 15846, 15847, 15848, 15849, 15850, 15852, 15856, 15857, 15858, 15859, 15861, 15864, 15865, 15866, 15867, 15868, 15869, 15872, 15873, 15877, 15880, 15881, 15882, 15886, 15890, 15891, 15892, 15895, 15896, 15899, 15902, 15905, 15908, 15911, 15915, 15921, 15924, 15927, 15928, 15929, 15931, 15932, 15954, 15955, 15965, 15969, 15974, 15976, 15977, 15981, 15985, 15994, 15997, 16001, 16005, 16007, 16011, 16012, 16016, 16017, 16019, 16020, 16025, 16026, 16032, 16033, 16036, 16039, 16042, 16043, 16253, 16254, 16257, 16259, 16261, 16263, 16264, 16265, 16266, 16270, 16271, 16273, 16277, 16283, 16285, 16286, 16288, 16292, 16298, 16304, 16306, 16315, 16317, 16318, 16319, 16320, 16321, 16322, 16323, 16325, 16326, 16327, 16328, 16329, 16330, 16331, 16332, 16333, 16335, 16336, 16337, 16338, 16339, 16340, 16341, 16343, 16344, 16345, 16347, 16348, 16349, 16350, 16351, 16352, 16354, 16355, 16356, 16358, 16359, 16360, 16361, 16362, 16364, 16365, 16366, 16369, 16370, 16371, 16372, 16373, 16374, 16375, 16376, 16377, 16379, 16380, 16381, 16382, 16383, 16386, 16387, 16388, 16389, 16390, 16393, 16394, 16395, 16396, 16397, 16398, 16400, 16405, 16406, 16407, 16410, 16412, 16413, 16414, 16416, 16417, 16418, 16419, 16420, 16421, 16422, 16423, 16424, 16426, 16445, 16446, 16447, 16450, 16453, 16455, 16459, 16461, 16462, 16463, 16464, 16466, 16467, 16468, 16469, 16470, 16472, 16473, 16475, 16477, 16478, 16479, 16480, 16481, 16482, 16483, 16484, 16485, 16487, 16488, 16489, 16490, 16508, 16509, 16510, 16511, 16512, 16513, 16514, 16515, 16516, 16517, 16518, 16520, 16521, 16522, 16523, 16524, 16525, 16526, 16563, 16566, 16567, 16568, 16569, 16570, 16571, 16572, 16573, 16574, 16575, 16578, 16579, 16581, 16583, 16585, 16586, 16587, 16589, 16590, 16591, 16592, 16593, 16595, 16596, 16597, 16598, 16599, 16600, 16601, 16602, 16603, 16604, 16605, 16607, 16610, 16611, 16612, 16613, 16614, 16615, 16617, 16618, 16619, 16620, 16621, 16622, 16625, 16626, 16627, 16628, 16629, 16630, 16631, 16632, 16633, 16636, 16637, 16638, 16640, 16641, 16642, 16643, 16644, 16646, 16647, 16654, 16655, 16660, 16692, 16699, 16700, 16701, 16702, 16706, 17044, 17047, 17050, 17051, 17054, 17055, 17056, 17057, 17058, 17059, 17060, 17061, 17062, 17063, 17064, 17065, 17066, 17067, 17068, 17070, 17071, 17072, 17073, 17074, 17075, 17076, 17077, 17078, 17079, 17080, 17081, 17082, 17083, 17084, 17085, 17088, 17089, 17090, 17091, 17092, 17093, 17094, 17095, 17096, 17097, 17098, 17099, 17100, 17101, 17102, 17103, 17104, 17105, 17106, 17107, 17109, 17110, 17112, 17113, 17115, 17116, 17117, 17118, 17119, 17121, 17122, 17123, 17124, 17125, 17126, 17127, 17128, 17129, 17130, 17131, 17133, 17135, 17136, 17140, 17141, 17142, 17143, 17144, 17145, 17146, 17147, 17148, 17149, 17150, 17151, 17152, 17153, 17155, 17157, 17158, 17159, 17160, 17161, 17166, 17167, 17168, 17170, 17171, 17172, 17173, 17174, 17177, 17178, 17179, 17180, 17181, 17182, 17183, 17184, 17185, 17186, 17187, 17189, 17190, 17191, 17192, 17193, 17194, 17195, 17197, 17198, 17199, 17200, 17201, 17203, 17204, 17206, 17207, 17208, 17209, 17210, 17211, 17212, 17213, 17214, 17215, 17216, 17217, 17218, 17219, 17220, 17221, 17222, 17223, 17224, 17225, 17226, 17228, 17229, 17230, 17231, 17232, 17233, 17234, 17235, 17236, 17237, 17238, 17239, 17240, 17244, 17248, 17257, 17258, 17259, 17260, 17261, 17262, 17263, 17264, 17265, 17266, 17267, 17268, 17269, 17270, 17273, 17274, 17275, 17276, 17277, 17278, 17279, 17280, 17281, 17282, 17284, 17285, 17286, 17289, 17290, 17291, 17292, 17293, 17294, 17295, 17297, 17299, 17300, 17303, 17304, 17305, 17307, 17308, 17310, 17311, 17313, 17315, 17316, 17317, 17318, 17319, 17320, 17321, 17322, 17323, 17324, 17325, 17326, 17331, 17332, 17333, 17334, 17335, 17336, 17338, 17339, 17340, 17341, 17342, 17343, 17344, 17345, 17346, 17347, 17348, 17349, 17350, 17351, 17352, 17353, 17354, 17355, 17356, 17358, 17359, 17360, 17361, 17362, 17363, 17364, 17365, 17366, 17367, 17368, 17369, 17370, 17371, 17372, 17373, 17374, 17375, 17376, 17379, 17380, 17381, 17382, 17383, 17384, 17385, 17387, 17388, 17389, 17390, 17391, 17392, 17393, 17394, 17395, 17397, 17398, 17399, 17400, 17402, 17404, 17405, 17406, 17407, 17408, 17409, 17410, 17411, 17412, 17413, 17414, 17415, 17416, 17417, 17418, 17419, 17420, 17421, 17423, 17424, 17425, 17426, 17427, 17429, 17430, 17432, 17433, 17434, 17435, 17437, 17440, 17441, 17442, 17443, 17444, 17445, 17446, 17448, 17449, 17450, 17452, 17453, 17454, 17456, 17457, 17458, 17459, 17460, 17461, 17462, 17464, 17465, 17469, 17470, 17473, 17474, 17475, 17476, 17477, 17478, 17481, 17482, 17483, 17484, 17485, 17486, 17487, 17490, 17491, 17492, 17495, 17496, 17497, 17498, 17499, 17500, 17501, 17502, 17503, 17504, 17505, 17506, 17508, 17509, 17510, 17512, 17513, 17514, 17515, 17516, 17518, 17519, 17522, 17525, 17528, 17529, 17530, 17532, 17533, 17534, 17535, 17536, 17537, 17538, 17540, 17541, 17543, 17544, 17545, 17546, 17547, 17548, 17549, 17550, 17551, 17552, 17554, 17555, 17557, 17558, 17559, 17560, 17561, 17562, 17564, 17565, 17566, 17567, 17570, 17571, 17572, 17573, 17574, 17575, 17576, 17578, 17579, 17580, 17581, 17582, 17583, 17584, 17585, 17586, 17587, 17588, 17589, 17590, 17591, 17592, 17593, 17594, 17596, 17599, 17600, 17601, 17602, 17604, 17606, 17607, 17608, 17609, 17610, 17611, 17612, 17613, 17615, 17616, 17617, 17618, 17619, 17620, 17621, 17622, 17629, 17630, 17632, 17633, 17634, 17635, 17636, 17637, 17638, 17639, 17640, 17641, 17642, 17643, 17645, 17646, 17647, 17648, 17649, 17650, 17651, 17652, 17653, 17656, 17657, 17658, 17659, 17660, 17661, 17662, 17663, 17664, 17665, 17666, 17667, 17668, 17669, 17670, 17671, 17674, 17675, 17677, 17678, 17679, 17680, 17681, 17682, 17683, 17684, 17685, 17687, 17688, 17689, 17690, 17691, 17692, 17693, 17695, 17696, 17697, 17698, 17700, 17701, 17703, 17705, 17706, 17707, 17708, 17710, 17711, 17713, 17714, 17715, 17716, 17717, 17718, 17723, 17724, 17725, 17726, 17727, 17728, 17729, 17730, 17731, 17732, 17733, 17734, 17735, 17736, 17737, 17738, 17741, 17742, 17743, 17745, 17752, 17753, 17754, 17755, 17758, 17759, 17760, 17761, 17762, 17763, 17764, 17765, 17766, 17767, 17770, 17771, 17772, 17773, 17774, 17775, 17776, 17777, 17778, 17780, 17781, 17782, 17783, 17784, 17786, 17787, 17788, 17790, 17791, 17792, 17793, 17795, 17796, 17797, 17798, 17800, 17801, 17802, 17803, 17804, 17805, 17806, 17807, 17808, 17809, 17810, 17811, 17812, 17813, 17814, 17815, 17816, 17817, 17818, 17819, 17825, 17837, 17842, 17854, 17858, 17859, 17860, 17861, 17862, 17863, 17864, 17866, 17867, 17869, 17872, 17873, 17874, 17875, 17877, 17878, 17879, 17880, 17882, 17883, 17884, 17885, 17886, 17887, 17888, 17889, 17890, 17891, 17892, 17893, 17896, 17897, 17901, 17902, 17906, 17907, 17908, 17910, 17913, 17915, 17916, 17917, 17918, 17919, 17921, 17922, 17923, 17924, 17925, 17926, 17927, 17928, 17929, 17930, 17931, 17933, 17934, 17935, 17936, 17937, 17938, 17940, 17941, 17942, 17943, 17944, 17945, 17946, 17947, 17948, 17950, 17951, 17952, 17953, 17954, 17955, 17956, 17957, 17958, 17960, 17961, 17962, 17963, 17964, 17965, 17966, 17967, 17968, 17969, 17970, 17971, 17972, 17973, 17974, 17975, 17976, 17977, 17978, 17979, 17980, 17981, 17982, 17983, 17984, 17985, 17986, 17987, 17988, 17989, 17990, 17992, 17993, 17994, 17995, 17997, 17998, 17999, 18000, 18002, 18003, 18005, 18006, 18007, 18010, 18012, 18018, 18021, 18022, 18023, 18024, 18025, 18026, 18027, 18028, 18030, 18031, 18032, 18033, 18034, 18035, 18036, 18037, 18038, 18039, 18040, 18041, 18042, 18043, 18044, 18045, 18046, 18047, 18048, 18049, 18050, 18051, 18052, 18053, 18055, 18056, 18058, 18059, 18061, 18062, 18064, 18066, 18067, 18068, 18070, 18071, 18072, 18073, 18074, 18075, 18076, 18079, 18080, 18081, 18082, 18085, 18086, 18088, 18089, 18090, 18092, 18093, 18094, 18097, 18099, 18100, 18101, 18102, 18103, 18104, 18105, 18106, 18107, 18108, 18109, 18110, 18111, 18112, 18114, 18115, 18116, 18117, 18118, 18119, 18120, 18121, 18122, 18123, 18124, 18125, 18126, 18128, 18131, 18132, 18133, 18134, 18137, 18138, 18139, 18140, 18141, 18142, 18143, 18144, 18145, 18146, 18148, 18149, 18150, 18152, 18153, 18154, 18156, 18159, 18160, 18161, 18163, 18165, 18166, 18167, 18168, 18171, 18173, 18174, 18177, 18180, 18181, 18182, 18184, 18186, 18188, 18192, 18193, 18194, 18195, 18196, 18197, 18198, 18199, 18200, 18201, 18203, 18204, 18205, 18207, 18208, 18210, 18211, 18212, 18214, 18219, 18220, 18223, 18224, 18226, 18227, 18228, 18229, 18230, 18231, 18232, 18234, 18235, 18237, 18238, 18239, 18240, 18241, 18242, 18243, 18244, 18245, 18246, 18247, 18248, 18249, 18250, 18252, 18253, 18254, 18255, 18256, 18257, 18258, 18259, 18260, 18261, 18263, 18264, 18265, 18266, 18267, 18268, 18269, 18270, 18274, 18275, 18276, 18277, 18278, 18279, 18281, 18282, 18283, 18284, 18285, 18286, 18287, 18288, 18289, 18290, 18297, 18298, 18300, 18301, 18302, 18303, 18304, 18305, 18307, 18308, 18309, 18310, 18311, 18312, 18313, 18315, 18316, 18317, 18318, 18319, 18320, 18321, 18322, 18323, 18324, 18325, 18326, 18327, 18328, 18329, 18331, 18333, 18334, 18335, 18336, 18337, 18338, 18339, 18340, 18344, 18345, 18346, 18347, 18348, 18349, 18350, 18351, 18353, 18354, 18355, 18356, 18357, 18358, 18360, 18363, 18364, 18365, 18366, 18367, 18368, 18369, 18370, 18371, 18372, 18373, 18374, 18375, 18379, 18382, 18383, 18384, 18385, 18386, 18387, 18388, 18389, 18390, 18392, 18395, 18396, 18397, 18399, 18400, 18401, 18402, 18404, 18405, 18406, 18407, 18408, 18410, 18411, 18413, 18416, 18417, 18418, 18420, 18421, 18423, 18424, 18425, 18426, 18428, 18431, 18433, 18434, 18435, 18436, 18437, 18438, 18441, 18442, 18443, 18444, 18445, 18446, 18447, 18448, 18449, 18450, 18451, 18452, 18453, 18454, 18455, 18456, 18457, 18458, 18459, 18460, 18461, 18462, 18463, 18466, 18467, 18468, 18469, 18470, 18471, 18472, 18473, 18474, 18475, 18476, 18477, 18478, 18479, 18480, 18481, 18483, 18484, 18485, 18486, 18487, 18488, 18489, 18490, 18492, 18493, 18494, 18495, 18496, 18497, 18498, 18499, 18500, 18501, 18502, 18503, 18504, 18505, 18506, 18507, 18510, 18511, 18513, 18514, 18515, 18516, 18517, 18518, 18519, 18520, 18521, 18522, 18523, 18526, 18527, 18529, 18532, 18533, 18534, 18536, 18538, 18539, 18540, 18541, 18542, 18544, 18545, 18546, 18547, 18548, 18551, 18552, 18553, 18554, 18555, 18556, 18557, 18558, 18559, 18560, 18561, 18562, 18566, 18567, 18569, 18570, 18571, 18572, 18573, 18574, 18575, 18576, 18577, 18578, 18579, 18580, 18581, 18582, 18583, 18584, 18585, 18588, 18589, 18593, 18597, 18598, 18599, 18600, 18601, 18603, 18604, 18605, 18606, 18607, 18608, 18609, 18611, 18614, 18615, 18617, 18619, 18620, 18621, 18622, 18624, 18625, 18626, 18627, 18628, 18630, 18631, 18632, 18633, 18634, 18635, 18636, 18638, 18639, 18640, 18641, 18644, 18646, 18647, 18649, 18650, 18651, 18652, 18653, 18655, 18656, 18657, 18660, 18661, 18662, 18663, 18665, 18666, 18667, 18670, 18671, 18672, 18673, 18674, 18678, 18679, 18681, 18682, 18683, 18684, 18686, 18687, 18688, 18689, 18690, 18693, 18694, 18695, 18696, 18697, 18699, 18707, 18708, 18709, 18710, 18711, 18712, 18713, 18716, 18717, 18718, 18721, 18722, 18723, 18726, 18727, 18728, 18729, 18730, 18731, 18732, 18733, 18735, 18736, 18737, 18738, 18739, 18740, 18741, 18742, 18743, 18744, 18745, 18746, 18747, 18748, 18750, 18751, 18752, 18755, 18756, 18757, 18758, 18761, 18763, 18764, 18765, 18766, 18774, 18778, 18789, 18801, 18802, 18803, 18807, 18808, 18809, 18810, 18811, 18812, 18813, 18814, 18815, 18816, 18817, 18818, 18819, 18820, 18821, 18822, 18823, 18824, 18825, 18827, 18829, 18830, 18831, 18832, 18833, 18837, 18841, 18842, 18843, 18844, 18845, 18846, 18847, 18848, 18854, 18855, 18858, 18859, 18861, 18862, 18863, 18864, 18865, 18866, 18867, 18872, 18877, 18878, 18884, 18885, 18886, 18887, 18888, 18889, 18890, 18891, 18892, 18893, 18894, 18895, 18896, 18899, 18900, 18902, 18904, 18905, 18906, 18908, 18935, 18936, 18939, 18941, 18944, 18945, 18946, 18947, 18948, 18949, 18950, 18952, 18953, 18954, 18955, 18958, 18959, 18961, 18962, 18963, 18964, 18965, 18966, 18967, 18968, 18969, 18970, 18971, 18972, 18973, 18974, 18975, 18976, 18977, 18983, 18984, 18985, 18986, 18987, 18988, 18989, 18990, 18991, 18992, 18993, 18994, 18995, 18996, 18997, 18998, 18999, 19000, 19001, 19002, 19003, 19004, 19005, 19006, 19007, 19008, 19009, 19010, 19011, 19012, 19014, 19015, 19016, 19017, 19019, 19022, 19024, 19025, 19026, 19027, 19028, 19029, 19030, 19031, 19038, 19039, 19047, 19048, 19049, 19050, 19051, 19052, 19053, 19054, 19055, 19056, 19057, 19073, 19080, 19086, 19089, 19091, 19092, 19094, 19095, 19096, 19101, 19102, 19103, 19104, 19105, 19106, 19107, 19108, 19109, 19111, 19113, 19135, 19143, 19144, 19148];
for (var i = 0; i < playerIDs.length; i++) {
    var option = playerIDs[i];
    var el = document.createElement('option');
    el.textContent = option;
    el.value = option;
    document.getElementById('playerID').appendChild(el);
}
document.getElementById('playerID').value = '182';

function value(el) {
    return document.getElementById(el).value;
};

function checked(el) {
    return document.getElementById(el).checked;
};

// https://www.html5canvastutorials.com/tutorials/html5-canvas-image-loader/
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].crossOrigin = 'anonymous';
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
};

function clearCard() {
    var card = document.getElementById('card');
    var ctx = card.getContext('2d');
    ctx.clearRect(0, 0, card.width, card.height);
    drawCard();
};

function drawCard() {
    var card = document.getElementById('card');
    var ctx = card.getContext('2d');

    var sources = {
        template: `./assets/card/${checked('maxed') ? 'maxed/' : ''}${value('cardType')}${value('position') == 'GK' ? 'GK' : ''}.png`,
        positionImage: `./assets/position/${value('position')}.png`,
        playerImage: `https://raw.githubusercontent.com/theshinramen/DLS-Files/main/playerphotos/DLS22/${value('playerID')}.png`,
        flagImage: `https://raw.githubusercontent.com/theshinramen/DLS-Files/main/flags/${value('nationality')}.png`,
        starImage: './assets/card/maxed/star/red.png'
    };

    if (value('uploadImage') != '') {
        document.getElementById('playerID').style.display = 'none';
        sources.playerImage = URL.createObjectURL(document.getElementById('uploadImage').files[0]);
    }

    if (checked('maxed')) {
        if (value('rating') > 0 && value('rating') <= 59) {
            sources.starImage = './assets/card/maxed/star/red.png'
        } else if (value('rating') > 59 && value('rating') <= 69) {
            sources.starImage = './assets/card/maxed/star/orange.png'
        } else if (value('rating') > 69 && value('rating') <= 79) {
            sources.starImage = './assets/card/maxed/star/yellow.png'
        } else if (value('rating') > 79 && value('rating') <= 89) {
            sources.starImage = './assets/card/maxed/star/green.png'
        } else if (value('rating') > 89 && value('rating') <= 100) {
            sources.starImage = './assets/card/maxed/star/blue.png'
        }
    }

    loadImages(sources, function (images) {
        ctx.drawImage(images.template, 0, 0);
        ctx.drawImage(images.playerImage, 18, 36, 224, 224);
        ctx.drawImage(images.positionImage, 202, 91);
        ctx.drawImage(images.flagImage, 202, 127, 46, 29);
        if (checked('maxed')) ctx.drawImage(images.starImage, 178, 0);

        // First Name
        ctx.textAlign = 'center'
        ctx.fillStyle = '#777a85';
        ctx.font = '16px Renogare';
        ctx.fillText(value('firstName'), 130, 281);

        // Last Name
        ctx.fillStyle = '#ffffff';
        ctx.font = '25px Renogare';
        ctx.fillText(value('lastName'), 130, value('firstName') == '' ? 299 : 305);

        // Stats
        ctx.font = '20px Renogare';
        var coordinates = [[335, 106], [335, 153], [335, 200], [335, 246], [434, 106], [434, 153], [434, 200], [434, 246]];
        for (var i = 1; i < 9; i++) {
            if (value(`stats${i}`) > 0 && value(`stats${i}`) <= 59) {
                ctx.fillStyle = '#d9342b';
            } else if (value(`stats${i}`) > 59 && value(`stats${i}`) <= 69) {
                ctx.fillStyle = '#e08835';
            } else if (value(`stats${i}`) > 69 && value(`stats${i}`) <= 79) {
                ctx.fillStyle = '#eadd4c';
            } else if (value(`stats${i}`) > 79 && value(`stats${i}`) <= 89) {
                ctx.fillStyle = '#5eca3d';
            } else if (value(`stats${i}`) > 89 && value(`stats${i}`) <= 100) {
                ctx.fillStyle = '#62d0c7';
            }

            if (value(`stats${i}`) == 100) {
                ctx.save();
                ctx.translate(coordinates[i - 1][0], coordinates[i - 1][1]);
                ctx.save();
                ctx.scale(0.9, 1);
                ctx.fillText(value(`stats${i}`), 0, 0);
                ctx.restore();
                ctx.restore();
            } else {
                ctx.fillText(value(`stats${i}`), coordinates[i - 1][0], coordinates[i - 1][1]);
            }
        }

        // Rating Circle
        if (!checked('maxed')) {
            ctx.beginPath();
            ctx.arc(222, 45, 31, 0, 2 * Math.PI);
            if (value('rating') > 0 && value('rating') <= 59) {
                ctx.fillStyle = '#d0504b';
            } else if (value('rating') > 59 && value('rating') <= 69) {
                ctx.fillStyle = '#de8735';
            } else if (value('rating') > 69 && value('rating') <= 79) {
                ctx.fillStyle = '#E4C059';
            } else if (value('rating') > 79 && value('rating') <= 89) {
                ctx.fillStyle = '#63d041';
            } else if (value('rating') > 89 && value('rating') <= 100) {
                ctx.fillStyle = '#5697cd';
            }
            ctx.fill();
        }

        // Rating
        ctx.fillStyle = '#ffffff';
        ctx.font = '28px Renogare';
        ctx.fillText(value('rating'), 222, 56);

        // Height
        ctx.textAlign = 'left'
        ctx.fillStyle = checked('maxed') && value('cardType') == 'legendary' ? '#ffffff' : '#1d2234';
        ctx.font = '23px Renogare';
        ctx.fillText(value('height'), 304, 60);

        // Foot
        ctx.fillText(value('foot'), 414, 60);
    });
};

// https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/
function saveCard() {
    var card = document.getElementById('card');
    const link = document.createElement('a');
    link.download = `${value('firstName')} ${value('lastName')}.png`;
    link.href = card.toDataURL();
    link.click();
    link.delete;
}; 