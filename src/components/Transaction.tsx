import React from "react";
import { withNavigation } from "react-navigation";

import { SIZES, COLORS } from "../utils/theme";

import Block from "./primary/Block";
import Text from "./primary/Text";
import Button from "./primary/Button";
import CirIcon from "./CirIcon";
import ImageIcon from "./primary/ImageIcon";
import { transactionTypes } from "../constants";
import { format } from 'date-fns'

const Transaction = props => {
  const { navigation, type, date, amount } = props;
  console.log('props', props)

  return (
    <Button
      transparent
      padding={0}
      margin={0}
    >
      <Block row space="between" middle center padding={SIZES.base}>
        <Block padding={SIZES.base}>
          <Text tertiary sfmedium height={14} size={12} spacing={0}>
            {type}
          </Text>
          <Text muted tiny gray light>
            {date}
          </Text>
        </Block>
        <Text tertiary sfmedium height={14} size={12} spacing={0}>
          N{amount}
        </Text>
      </Block>
    </Button>
  );
};

export default withNavigation(Transaction);