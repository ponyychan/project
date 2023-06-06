import Joi from "joi";

const schema = {
  userId: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"))
    .messages({
      "string.empty": "이메일을 입력해주세요.",
      "string.email": "이메일 형식에 맞지 않습니다.",
    }),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"))
    .messages({
      "string.pattern.base":
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.",
      "string.empty": "비밀번호를 입력해주세요.",
    })
    .required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "비밀번호가 일치하지 않습니다.",
  }),
  nickname: Joi.string().required().messages({
    "string.empty": "닉네임을 입력해주세요.",
  }),
};

export const postSignUpSchema = Joi.object(schema).with(
  "password",
  "confirmPassword"
);
