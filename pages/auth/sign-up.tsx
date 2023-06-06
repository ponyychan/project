import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Typography, Stack, Button, TextField } from "@mui/material";
import { joiResolver } from "@hookform/resolvers/joi";
import { postSignUpSchema } from "@/src/lib/validations/auth.schema";
import { UserType } from "@/types/user.type";

type Inputs = {
  confirmPassword: string;
} & UserType;

const SignUpPage = () => {
  // useForm configuration
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: joiResolver(postSignUpSchema),
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" mb={2}>
        회원가입
      </Typography>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Stack rowGap={2} mb={4}>
          <Typography variant="subtitle1">사용자 정보</Typography>
          <Controller
            name="userId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="이메일"
                fullWidth
                placeholder="이메일을 입력해주세요."
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호"
                fullWidth
                placeholder="비밀번호를 입력해주세요."
                type="password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호 확인"
                fullWidth
                placeholder="비밀번호를 확인해주세요."
                type="password"
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : ""
                }
              />
            )}
          />
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="닉네임"
                fullWidth
                placeholder="닉네임을 입력해주세요."
                error={!!errors.nickname}
                helperText={errors.nickname ? errors.nickname.message : ""}
              />
            )}
          />
        </Stack>
        <Button type="submit" variant="contained" fullWidth size="large">
          회원가입
        </Button>
      </form>
    </Container>
  );
};

export default SignUpPage;
