import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { useMemo, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MAIN_INPUT_MAX_LENGTH } from '@/src/constants/config';
import type { UseInputReturn } from '@/src/hooks/useInput';

import * as style from './style.css';
import { inputHeight } from './style.css';

interface WriteInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
}

const WriteInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
}: WriteInputProps) => {
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const handleResize = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;

    if (value.length === 0) {
      setTextareaHeight((prev) => ({
        row: 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: false },
      }));
    }

    // 줄바꿈이 일어날 때
    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    // 텍스트 지워서 줄바꿈 지점에 도달했을 때
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  const submitButton = useMemo(() => {
    if (value.length > 0) {
      return '/icons/submit-active.svg';
    }
    return '/icons/submit.svg';
  }, [value.length]);

  return (
    <div className={style.conatiner}>
      <div
        className={style.contentWrapper}
        style={assignInlineVars({
          [inputHeight]: `${textareaHeight.row * 27}px`,
        })}
      >
        <label htmlFor={id} className={style.label}>
          <textarea
            {...inputProps}
            ref={inputRef}
            autoComplete="off"
            rows={textareaHeight.row}
            className={style.input}
            placeholder={placeholder}
            maxLength={maxLength}
            onInput={handleResize}
            onKeyDown={onKeyEnter}
          />
        </label>

        <div
          className={style.submitWrapper({
            multirow: textareaHeight.row > 1,
          })}
        >
          <div className={style.submit}>
            {value.length > 0 && (
              <span className={style.textCount}>
                <span className={style.currentTextCount}>{value.length}</span>
                &nbsp;/&nbsp;500자
              </span>
            )}
            <button disabled={value.length < 1}>
              <Image
                src={submitButton}
                alt={'제출 버튼'}
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteInput;
