import { View, Text } from "react-native";
import React from "react";

const AssessmentDisplay = () => {
  return (
    <View>
      <Text>AssessmentDisplay</Text>
    </View>
  );
};

export default AssessmentDisplay;

// <List.Accordion
//           style={styles.displayAccordion}
//           titleStyle={styles.displayAccordionTitle}
//           descriptionStyle={styles.displayAccordionDescription}
//           title={}
//           description="Grade %"
//         >
//           <List.Item
//             style={styles.displayItemStyle}
//             titleStyle={styles.displayItemTitle}
//             descriptionStyle={styles.displayItemDescription}
//             title={assessment.instructor}
//             description="Date and Time"
//           />
//           <List.Item
//             style={styles.displayItemStyle}
//             titleStyle={styles.displayItemTitle}
//             descriptionStyle={styles.displayItemDescription}
//             titleNumberOfLines={3}
//             title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
//           />
//           <List.Item
//             style={styles.displayItemStyle}
//             titleStyle={styles.displayItemTitle}
//             descriptionStyle={styles.displayItemDescription}
//             title="A: []    B: []    C: []"
//             description="Pass"
//           />
//           <List.Item
//             style={styles.displayItemStyle}
//             titleStyle={styles.displayItemTitle}
//             descriptionStyle={[styles.edit, styles.displayItemDescription]}
//             onPress={() => {
//               navigation.navigate(ASSESSMENTS_SCREEN.Update);
//             }}
//             title=""
//             description="Edit"
//           />
//         </List.Accordion>
