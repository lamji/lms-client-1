"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProposalContentSectionsProps } from "@/domain/project-proposal/types";
import { MainScreensFeatureMock } from "./MainScreensFeatureMock";

function showMessage(message: string) {
  if (typeof window !== "undefined") {
    window.alert(message);
    return;
  }

  console.info(message);
}

const toast = {
  dismiss: (_id?: string) => {},
  error: (message: string, _options?: Record<string, unknown>) => showMessage(message),
  success: (message: string, _options?: Record<string, unknown>) => showMessage(message),
};

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-semibold text-zinc-900">{children}</h2>;
}

function normalizeOtpInput(value: string) {
  return value.replace(/\D/g, "").slice(0, 6);
}

function ScopeSection() {
  return (
    <section id="scope-main" className="space-y-4">
      <SectionTitle>Scope</SectionTitle>
      <p className="text-zinc-700">This proposal follows the exact scope and flow provided in the BRD draft.</p>
    </section>
  );
}

function ExternalServicesSection() {
  return (
    <section id="external-services-main" className="space-y-5">
      <SectionTitle>External Services</SectionTitle>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Payment</h3>
        <ul className="list-disc pl-6">
          <li>Paymongo</li>
          <li>https://www.paymongo.com/pricing</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Cloud Services</h3>
        <ul className="list-disc pl-6">
          <li>NorthFlank (Pay as you go)</li>
          <li>Database backup</li>
          <li>Scale as you go</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Tech</h3>
        <ul className="list-disc pl-6">
          <li>Next.js (Free)</li>
          <li>Stateless backend (Free)</li>
          <li>MongoDB (Free)</li>
          <li>Redis (Free)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Video Hosting</h3>
        <ul className="list-disc pl-6">
          <li>TBA (For upgrade)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">Domain</h3>
        <ul className="list-disc pl-6">
          <li>Namecheap (Yearly renew depends on the domain selected)</li>
        </ul>
      </div>

      <div className="space-y-2 text-zinc-700">
        <h3 className="font-semibold text-zinc-900">App Store/Playtore subscription</h3>
        <ul className="list-disc pl-6">
          <li>Apple App Store (iOS): $99/year ≈ PHP 5,500 - 5,700 per year (depends on exchange rate)</li>
          <li>Google Play Store (Android): $25 one-time ≈ PHP 1,400 - 1,500</li>
        </ul>
      </div>
    </section>
  );
}

function WorkBreakdownSection() {
  return (
    <section id="work-breakdown-main" className="space-y-6">
      <SectionTitle>Work Breakdown Sheet</SectionTitle>
      <p className="text-zinc-700">Use the sidebar items under Work Breakdown Sheet to open each flow section separately.</p>
    </section>
  );
}

function WbsOtpFlowSection() {
  return (
    <section id="wbs-otp-flow" className="space-y-4">
      <SectionTitle>1.0 OTP flow</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>System validate the OTP.</li>
        <li>If valid, show new password inputs.</li>
        <li>This requires a temporary token.</li>
        <li>New password and confirm new password.</li>
        <li>System sends the new created password.</li>
        <li>If success proceed to next(). If failed alert and retry.</li>
        <li>If not valid, apply rate limit request.</li>
        <li>Allowed 3 mistakes or wrong OTP.</li>
        <li>After 3rd attempt, invalidate OTP and temporarily block IP request.</li>
        <li>Wait for 5 minutes before requesting OTP again.</li>
      </ul>
    </section>
  );
}

function WbsLoginSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const toastId = "project-proposal-login-mock-toast";

  const handleMockLogin = () => {
    toast.dismiss(toastId);

    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setEmailError(false);
    toast.success("Mock login processed. Redirect to homepage on success; alert and retry on failure.", {
      id: toastId,
      closeButton: true,
      duration: 5000,
    });
  };

  return (
    <section id="wbs-login" className="space-y-4">
      <SectionTitle>Login</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Login Screen Mock (Visual Only)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          <div className="space-y-1">
            <label htmlFor="mock-login-email" className="text-sm text-zinc-700">
              Email address
            </label>
            <Input
              id="mock-login-email"
              data-test-id="project-proposal-login-mock-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (event.target.value.trim()) {
                  setEmailError(false);
                }
              }}
              className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="mock-login-password" className="text-sm text-zinc-700">
              Password
            </label>
            <div className="relative">
              <Input
                id="mock-login-password"
                data-test-id="project-proposal-login-mock-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                data-test-id="project-proposal-login-mock-toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
          </div>
          <Button
            type="button"
            data-test-id="project-proposal-login-mock-submit"
            className="w-full"
            onClick={handleMockLogin}
          >
            Login
          </Button>
          <div className="flex items-center justify-between text-xs">
            <Link href="#" data-test-id="project-proposal-login-mock-forgot" className="text-zinc-600 underline">
              Forgot password
            </Link>
            <Link href="#" data-test-id="project-proposal-login-mock-signup" className="text-zinc-600 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User input email address.</li>
        <li>User input password (can show and hide password).</li>
        <li>User click login then system process login.</li>
        <li>System validates the login payload via Zod before proceeding.</li>
        <li>If success redirect to homepage. If failed alert and retry.</li>
        <li>Has forgot password and sign up link.</li>
      </ul>
    </section>
  );
}

function WbsForgotPasswordSection() {
  const [mode, setMode] = useState<"email" | "otp" | "reset">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockUntil, setLockUntil] = useState<number | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState<number | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const toastId = "project-proposal-forgot-password-mock-toast";

  const handleSendOtp = () => {
    toast.dismiss(toastId);

    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    const now = Date.now();
    if (lockUntil && lockUntil > now) {
      const remainingMinutes = Math.ceil((lockUntil - now) / 60000);
      toast.error(`Request is temporarily blocked. Try again in ${remainingMinutes} minute(s).`, {
        id: toastId,
        closeButton: true,
        duration: 5000,
      });
      return;
    }

    setEmailError(false);
    setMode("otp");
    setFailedAttempts(0);
    setOtp("");
    setOtpExpiresAt(now + 5 * 60 * 1000);
    toast.success("Mock OTP sent via email. Enter any 6-digit OTP for demo. OTP expires in 5 minutes.", {
      id: toastId,
      closeButton: true,
      duration: 7000,
    });
  };

  const handleVerifyOtp = () => {
    toast.dismiss(toastId);

    const now = Date.now();
    if (lockUntil && lockUntil > now) {
      const remainingMinutes = Math.ceil((lockUntil - now) / 60000);
      toast.error(`Too many wrong OTP attempts. Try again in ${remainingMinutes} minute(s).`, {
        id: toastId,
        closeButton: true,
        duration: 5000,
      });
      return;
    }

    if (!otp.trim()) {
      setOtpError(true);
      toast.error("OTP is required.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otp.length !== 6) {
      setOtpError(true);
      toast.error("OTP must be exactly 6 digits.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otpExpiresAt && now > otpExpiresAt) {
      setOtpError(true);
      toast.error("OTP expired. Request a new OTP.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setOtpError(false);
    setMode("reset");
    toast.success("OTP verified. Temporary secure token granted (mock). You can now set new password.", {
      id: toastId,
      closeButton: true,
      duration: 6000,
    });
  };

  const handleResetPassword = () => {
    toast.dismiss(toastId);

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
      toast.error("Passwords must match.", { id: toastId, closeButton: true, duration: 5000 });
      return;
    }

    setPasswordError(false);
    toast.success("Mock password reset complete. Next step: redirect to login.", {
      id: toastId,
      closeButton: true,
      duration: 5000,
    });
  };

  return (
    <section id="wbs-forgot-password" className="space-y-4">
      <SectionTitle>Forgot password</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Forgot Password Mock (Visual + Simulation)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          {mode === "email" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-email" className="text-sm text-zinc-700">
                  Email address
                </label>
                <Input
                  id="mock-forgot-email"
                  data-test-id="project-proposal-forgot-mock-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (event.target.value.trim()) {
                      setEmailError(false);
                    }
                  }}
                  className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-forgot-mock-send-otp" onClick={handleSendOtp}>
                Send OTP
              </Button>
            </>
          )}

          {mode === "otp" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-otp" className="text-sm text-zinc-700">
                  OTP code
                </label>
                <Input
                  id="mock-forgot-otp"
                  data-test-id="project-proposal-forgot-mock-otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    const normalizedValue = normalizeOtpInput(event.target.value);
                    setOtp(normalizedValue);
                    if (normalizedValue.trim()) {
                      setOtpError(false);
                    }
                  }}
                  className={otpError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-forgot-mock-verify-otp" onClick={handleVerifyOtp}>
                  Verify OTP
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  data-test-id="project-proposal-forgot-mock-back-email"
                  onClick={() => setMode("email")}
                >
                  Back to Email
                </Button>
              </div>
            </>
          )}

          {mode === "reset" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-new-password" className="text-sm text-zinc-700">
                  New password
                </label>
                <Input
                  id="mock-forgot-new-password"
                  data-test-id="project-proposal-forgot-mock-new-password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-forgot-confirm-password" className="text-sm text-zinc-700">
                  Confirm password
                </label>
                <Input
                  id="mock-forgot-confirm-password"
                  data-test-id="project-proposal-forgot-mock-confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-forgot-mock-reset-password" onClick={handleResetPassword}>
                Reset Password
              </Button>
              <Button
                type="button"
                variant="outline"
                data-test-id="project-proposal-forgot-mock-back-otp"
                onClick={() => setMode("otp")}
              >
                Back to OTP
              </Button>
            </>
          )}
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User input email address.</li>
        <li>System generates OTP and sends via email.</li>
        <li>OTP expiration is 5 minutes.</li>
        <li>User input OTP and apply 1.0 OTP flow.</li>
        <li>If user did not input OTP, redirect to login after ___ mins.</li>
      </ul>
    </section>
  );
}

function WbsSignUpSection() {
  const [mode, setMode] = useState<"email" | "otp" | "password" | "details">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const signupToastId = "project-proposal-signup-mock-toast";

  const handleSendSignupOtp = () => {
    toast.dismiss(signupToastId);
    if (!email.trim()) {
      setEmailError(true);
      toast.error("Email address is required.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setEmailError(false);
    setMode("otp");
    setOtp("");
    toast.success("Mock OTP sent for sign up. Enter any 6-digit OTP for demo.", {
      id: signupToastId,
      closeButton: true,
      duration: 6000,
    });
  };

  const handleVerifySignupOtp = () => {
    toast.dismiss(signupToastId);
    if (!otp.trim()) {
      setOtpError(true);
      toast.error("OTP is required.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    if (otp.length !== 6) {
      setOtpError(true);
      toast.error("OTP must be exactly 6 digits.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setOtpError(false);
    setMode("password");
    toast.success("OTP verified. Continue to password setup.", { id: signupToastId, closeButton: true, duration: 5000 });
  };

  const handlePasswordNext = () => {
    toast.dismiss(signupToastId);
    if (password !== confirmPassword) {
      setPasswordError(true);
      toast.error("Passwords must match.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setPasswordError(false);
    setMode("details");
    toast.success("Password step completed. Continue to details.", { id: signupToastId, closeButton: true, duration: 5000 });
  };

  const handleSubmitSignup = () => {
    toast.dismiss(signupToastId);
    if (!firstName.trim() || !lastName.trim() || !address.trim() || !mobile.trim()) {
      setDetailsError(true);
      toast.error("All required details are needed.", { id: signupToastId, closeButton: true, duration: 5000 });
      return;
    }

    setDetailsError(false);
    toast.success("Mock sign up submitted. If API succeeds, redirect to login.", {
      id: signupToastId,
      closeButton: true,
      duration: 6000,
    });
  };

  return (
    <section id="wbs-sign-up" className="space-y-4">
      <SectionTitle>Sign up</SectionTitle>
      <div className="max-w-md rounded-xl border border-zinc-300 p-4">
        <h3 className="text-base font-semibold text-zinc-900">Sign Up Mock (Visual + Simulation)</h3>
        <p className="mt-1 text-xs text-zinc-500">For client presentation only. No backend connection.</p>
        <div className="mt-4 space-y-3">
          {mode === "email" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-email" className="text-sm text-zinc-700">
                  Email
                </label>
                <Input
                  id="mock-signup-email"
                  data-test-id="project-proposal-signup-mock-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (event.target.value.trim()) {
                      setEmailError(false);
                    }
                  }}
                  placeholder="you@example.com"
                  className={emailError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <Button type="button" data-test-id="project-proposal-signup-mock-send-otp" onClick={handleSendSignupOtp}>
                Send OTP
              </Button>
            </>
          )}

          {mode === "otp" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-otp" className="text-sm text-zinc-700">
                  OTP code
                </label>
                <Input
                  id="mock-signup-otp"
                  data-test-id="project-proposal-signup-mock-otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    const normalizedValue = normalizeOtpInput(event.target.value);
                    setOtp(normalizedValue);
                    if (normalizedValue.trim()) {
                      setOtpError(false);
                    }
                  }}
                  placeholder="Enter 6-digit OTP"
                  className={otpError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-verify-otp" onClick={handleVerifySignupOtp}>
                  Verify OTP
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-email" onClick={() => setMode("email")}>
                  Back to Email
                </Button>
              </div>
            </>
          )}

          {mode === "password" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-password" className="text-sm text-zinc-700">
                  New password
                </label>
                <Input
                  id="mock-signup-password"
                  data-test-id="project-proposal-signup-mock-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-confirm-password" className="text-sm text-zinc-700">
                  Confirm password
                </label>
                <Input
                  id="mock-signup-confirm-password"
                  data-test-id="project-proposal-signup-mock-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm password"
                  className={passwordError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-password-next" onClick={handlePasswordNext}>
                  Next
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-otp" onClick={() => setMode("otp")}>
                  Back to OTP
                </Button>
              </div>
            </>
          )}

          {mode === "details" && (
            <>
              <div className="space-y-1">
                <label htmlFor="mock-signup-first-name" className="text-sm text-zinc-700">
                  Name
                </label>
                <Input
                  id="mock-signup-first-name"
                  data-test-id="project-proposal-signup-mock-first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-last-name" className="text-sm text-zinc-700">
                  Last Name
                </label>
                <Input
                  id="mock-signup-last-name"
                  data-test-id="project-proposal-signup-mock-last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-address" className="text-sm text-zinc-700">
                  Address
                </label>
                <Input
                  id="mock-signup-address"
                  data-test-id="project-proposal-signup-mock-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Address"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mock-signup-mobile" className="text-sm text-zinc-700">
                  Mobile Number
                </label>
                <Input
                  id="mock-signup-mobile"
                  data-test-id="project-proposal-signup-mock-mobile"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="Mobile number"
                  className={detailsError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" data-test-id="project-proposal-signup-mock-submit" onClick={handleSubmitSignup}>
                  Sign Up
                </Button>
                <Button type="button" variant="outline" data-test-id="project-proposal-signup-mock-back-password" onClick={() => setMode("password")}>
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>By default: Email and Password.</li>
        <li>User input email and system validate via OTP.</li>
        <li>User input OTP and apply 1.0 OTP flow.</li>
        <li>If success show password input (new password and confirm password).</li>
        <li>User click Next and show required details: Name, Last Name, Address, Mobile Number, TBD other details.</li>
        <li>User click sign up and system validates payload via Zod.</li>
        <li>If passed, call API and save to database then redirect to login.</li>
        <li>If failed, alert and retry.</li>
      </ul>
    </section>
  );
}

function MainScreensSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensSection fired");
  }

  return (
    <section id="main-screens-main" className="space-y-5">
      <SectionTitle>APP/WEB Main Screens</SectionTitle>
      <p className="text-zinc-700">
        The home page includes a Header with navigation, a Hero section with image slideshow, and a list of available courses.
        Access behavior is split between Subscribers (course progress, continue/start) and Non-subscribers (free simulation, subscription plans).
      </p>
      <div className="space-y-3">
        <h3 className="font-semibold text-zinc-900">Header</h3>
        <ul className="list-disc pl-6 text-zinc-700">
          <li>
            <span className="font-medium">Left:</span> Menu icon with links — My Learning (if logged in), Certificates (if logged in), FAQ, About Us, Courses, Contacts.
          </li>
          <li>
            <span className="font-medium">Right (logged in):</span> Profile icon → click shows menu: Profile (redirect to profile page), Logout (invalidate token, clear session, redirect to login).
          </li>
          <li>
            <span className="font-medium">Right (not logged in):</span> Login button → redirect to login page.
          </li>
        </ul>
      </div>
      <MainScreensFeatureMock feature="header" />
    </section>
  );
}

function MainScreensHeroSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensHeroSection fired");
  }

  return (
    <section id="screens-home-hero" className="space-y-4">
      <SectionTitle>Home Page: Hero Section</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Image slideshow powered by React Slick.</li>
        <li>Auto-rotates between featured courses/announcements.</li>
        <li>Mobile: swipe left/right to navigate slides.</li>
      </ul>
      <MainScreensFeatureMock feature="hero" />
    </section>
  );
}

function MainScreensSubscriberSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensSubscriberSection fired");
  }

  return (
    <section id="screens-home-subscriber" className="space-y-4">
      <SectionTitle>Home Page: Subscriber Course View</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Show list of courses for active subscribers.</li>
        <li>Each course card has a progress bar showing completion percentage.</li>
        <li><span className="font-medium">Continue</span> button — resumes from the last session end point.</li>
        <li><span className="font-medium">Start</span> button — for courses not yet started.</li>
        <li>Both Continue and Start are <span className="font-medium">disabled when due is unpaid</span> — visual indicator shows &quot;Plan Expired — Renew to Continue.&quot;</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Paid learner logs in -{">"} sees Cardio course at 65% progress -{">"} clicks Continue -{">"} resumes from last lesson. Subscription expires mid-session -{">"} session continues but next access blocked until renewal.
      </span>
      <MainScreensFeatureMock feature="subscriber" />
    </section>
  );
}

function MainScreensNonSubscriberSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensNonSubscriberSection fired");
  }

  return (
    <section id="screens-home-nonsubscriber" className="space-y-4">
      <SectionTitle>Home Page: Non-Subscriber Simulation View</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>List of test simulation cards (fully clickable, no lock icon, accessible immediately).</li>
        <li>
          <span className="font-medium">CTA: Start Free</span> — opens modal:
          <ul className="mt-1 list-disc pl-6">
            <li>User selects number of items.</li>
            <li>Starts simulation.</li>
            <li>
              After finished:
              <ul className="mt-1 list-disc pl-6">
                <li>System validates answers and shows scores.</li>
                <li>Shows each question with answer and explanation per choice (why A is wrong, why B is wrong, why C is correct).</li>
                <li>Shows strengths, weaknesses, and areas for improvement.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscription Plans</span> — shown after free simulation:
          <ul className="mt-1 list-disc pl-6">
            <li>Monthly — list of included features.</li>
            <li>Quarterly — list of included features.</li>
            <li>Yearly — list of included features.</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscribe Flow:</span> User clicks Subscribe -{">"} API calls PayMongo payment intent (GCash, Maya, Credit/Debit) -{">"} user selects payment method -{">"} PayMongo processes payment -{">"} triggers webhook -{">"} system saves encrypted payment info -{">"} updates user from non-subscriber to subscriber -{">"} marks billing period as paid.
        </li>
      </ul>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <span className="font-semibold">Clarification needed:</span> Is monthly payment auto-deduct or does user need to be notified for upcoming due?
      </div>
      <span className="block text-xs text-zinc-500">
        Scenario: New user clicks Start Free -{">"} selects 20 items -{">"} takes simulation -{">"} sees score 72% with detailed explanations -{">"} sees subscription plans -{">"} clicks Subscribe Monthly -{">"} selects GCash -{">"} payment processed -{">"} status updated to subscriber -{">"} full course access unlocked.
      </span>
      <MainScreensFeatureMock feature="non-subscriber" />
    </section>
  );
}

function MainScreensReviewerModalSection() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensReviewerModalSection fired");
  }

  return (
    <section id="screens-reviewer-modal" className="space-y-4">
      <SectionTitle>Modal Reviewer Flow</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>One question at a time displayed in a fullscreen modal.</li>
        <li>Timer set by admin in admin dashboard (enforced server-side).</li>
        <li>User reads question and selects answer using radio buttons.</li>
        <li><span className="font-medium">Next</span> button — moves to next question, saves current answer.</li>
        <li><span className="font-medium">Previous</span> button — go back and change answer <span className="text-amber-600">(to be clarified)</span>.</li>
        <li>Timer reaches 0:00 — remaining unanswered questions auto-submitted as blank, summary shows score.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Learner starts Board Review simulation (60 items, 90 min) -{">"} answers Q1 -{">"} clicks Next -{">"} reaches Q23 -{">"} clicks Previous to change Q22 answer -{">"} continues forward -{">"} timer warning at 50% time remaining -{">"} completes all 60 items -{">"} system scores and shows detailed results.
      </span>
      <MainScreensFeatureMock feature="reviewer" />
    </section>
  );
}

function ProfileScreenSection() {
  return (
    <section id="profile-screen-main" className="space-y-4">
      <SectionTitle>Profile Screen</SectionTitle>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>User profile picture and personal details.</li>
        <li>
          <span className="font-medium">Performance Cards:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Simulation test scores (last 3 tests).</li>
            <li>Test performance tracker (progress over time).</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Payment Method:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Saved for easy repayment in next billing (encrypted).</li>
            <li>Only the user can see masked values: cards **********1441, GCash *********2183.</li>
            <li>System and admin staff cannot see sensitive payment values.</li>
            <li>Even in PayMongo this is encrypted (PCI-DSS compliant).</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Subscription Card:</span>
          <ul className="mt-1 list-disc pl-6">
            <li>Shows selected plan (e.g., Quarterly — expires May 2026).</li>
            <li>Upgrade option (e.g., Monthly → Quarterly).</li>
            <li>Downgrade option.</li>
          </ul>
        </li>
        <li><span className="font-medium">Logout:</span> Invalidates token, clears session, redirects to login.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Learner opens Profile -{">"} sees Quarterly plan expiring May 2026 -{">"} clicks Upgrade to Yearly -{">"} sees plan comparison -{">"} confirms -{">"} redirected to PayMongo -{">"} payment processed -{">"} subscription updated immediately. Learner clicks Change Payment Method -{">"} sees saved card ****1441 -{">"} can delete and add new card.
      </span>
    </section>
  );
}

function AdminBrdMainSection() {
  return (
    <section id="admin-brd-main" className="space-y-4">
      <SectionTitle>Admin BRD: Overview</SectionTitle>
      <p className="text-zinc-700">
        Simple admin dashboard for managing the LMS platform day-to-day. Accessible via side navigation with 5 sections.
      </p>
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
        <p className="mb-3 text-sm font-semibold text-zinc-900">Side Navigation</p>
        <ol className="space-y-1.5 text-sm text-zinc-700">
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-[11px] font-bold text-white">1</span>
            <span><span className="font-medium">Dashboard</span> — analytics cards and sales chart</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-[11px] font-bold text-white">2</span>
            <span><span className="font-medium">Subscribers</span> — list of subscribed users</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-[11px] font-bold text-white">3</span>
            <span><span className="font-medium">Unsubscribers</span> — list of unsubscribed users</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-[11px] font-bold text-white">4</span>
            <span><span className="font-medium">Modules</span> — upload question sets via CSV</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-600 text-[11px] font-bold text-white">5</span>
            <span><span className="font-medium">Payments</span> — manage subscription plans and pricing</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function AdminBrdDashboardSection() {
  return (
    <section id="admin-brd-dashboard" className="space-y-4">
      <SectionTitle>Admin: 1. Dashboard</SectionTitle>
      <p className="text-zinc-700">Landing page after admin login. Shows a summary of key metrics at a glance.</p>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Analytics Cards</span> — displayed in a row at the top:
          <ul className="mt-1 list-disc pl-6 text-sm">
            <li>Total Sales (revenue)</li>
            <li>Total Students (all registered users)</li>
            <li>Subscribers (active paid users)</li>
            <li>Total Courses / Modules</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Sales Chart</span> — line chart showing sales over time (weekly or monthly view).
          <span className="mt-1 block text-xs text-zinc-500">
            Scenario: Admin opens Dashboard -{">"} sees 4 metric cards (₱48,500 sales, 320 students, 210 subscribers, 12 courses) -{">"} line
            chart shows upward trend this month. Admin spots a dip in week 2 and checks Payments section for context.
          </span>
        </li>
      </ul>
    </section>
  );
}

function AdminBrdSubscribersSection() {
  return (
    <section id="admin-brd-subscribers" className="space-y-4">
      <SectionTitle>Admin: 2. Subscribers</SectionTitle>
      <p className="text-zinc-700">List of all users with an active paid subscription.</p>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Displays a table/list of subscribed users.</li>
        <li>Each row shows: name, email, plan (Monthly / Quarterly / Yearly), subscription start and end date, status.</li>
        <li>Searchable and sortable by name or email.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Admin opens Subscribers -{">"} sees 210 active learners -{">"} searches &quot;juan&quot; -{">"} finds Juan dela Cruz on
        Quarterly plan expiring April 10 -{">"} verifies account is in good standing.
      </span>
    </section>
  );
}

function AdminBrdUnsubscribersSection() {
  return (
    <section id="admin-brd-unsubscribers" className="space-y-4">
      <SectionTitle>Admin: 3. Unsubscribers</SectionTitle>
      <p className="text-zinc-700">List of users who have no active subscription (expired or never subscribed).</p>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>Displays a table/list of unsubscribed users.</li>
        <li>Each row shows: name, email, last plan (if any), date unsubscribed or expired.</li>
        <li>Searchable and sortable by name or email.</li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Admin opens Unsubscribers -{">"} sees 110 lapsed users -{">"} identifies users whose plan expired this week -{">"}
        exports list for re-engagement campaign.
      </span>
    </section>
  );
}

function AdminBrdModulesSection() {
  return (
    <section id="admin-brd-modules" className="space-y-4">
      <SectionTitle>Admin: 4. Modules</SectionTitle>
      <p className="text-zinc-700">Admin can upload question sets for the reviewer via CSV files.</p>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Download CSV Template</span> — button to download the required CSV format so admin can
          prepare questions correctly before uploading.
        </li>
        <li>
          <span className="font-semibold">Upload: Simulation Module</span> — uploads questions used for the free simulation (non-subscriber flow).
        </li>
        <li>
          <span className="font-semibold">Upload: Subscriber Module</span> — uploads questions used for paid subscriber courses.
        </li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Admin clicks &quot;Download Template&quot; -{">"} gets CSV with columns (question, choice_a, choice_b, choice_c,
        choice_d, correct_answer, explanation) -{">"} fills in 50 questions -{">"} clicks &quot;Upload: Simulation Module&quot; -{">"} selects
        CSV -{">"} system validates and imports -{">"} questions available in the simulation flow.
      </span>
      <span className="mt-1 block text-xs text-zinc-400">
        Edge case: CSV has missing columns or invalid format -{">"} system shows row-by-row errors -{">"} admin corrects and re-uploads.
      </span>
    </section>
  );
}

function AdminBrdPaymentsSection() {
  return (
    <section id="admin-brd-payments" className="space-y-4">
      <SectionTitle>Admin: 5. Payments</SectionTitle>
      <p className="text-zinc-700">Admin manages subscription plans and pricing. Maximum of 3 plans.</p>
      <ul className="list-disc pl-6 text-zinc-700">
        <li>
          <span className="font-semibold">Plan Cards</span> — existing plans displayed as cards in a flex row. Each card shows: plan
          title, price, and list of perks.
        </li>
        <li>
          <span className="font-semibold">Add Payment Plan</span> — button opens a modal. Maximum of 3 plans total; button is disabled
          when 3 plans already exist.
          <ul className="mt-1 list-disc pl-6 text-sm">
            <li>Modal fields: Title, Price, Perks (list of features)</li>
            <li>Save button — saves the new plan and adds it as a card.</li>
          </ul>
        </li>
        <li>
          Admin can edit or remove existing plans directly on the card.
        </li>
      </ul>
      <span className="block text-xs text-zinc-500">
        Scenario: Admin opens Payments -{">"} sees 2 existing plan cards (Monthly ₱299, Quarterly ₱799) -{">"} clicks &quot;Add Payment
        Plan&quot; -{">"} modal opens -{">"} enters Title: &quot;Yearly&quot;, Price: ₱2,499, Perks: [Unlimited simulations, All modules,
        Priority support] -{">"} clicks Save -{">"} new card appears in the flex row. &quot;Add Payment Plan&quot; button is now disabled
        (3 plans reached).
      </span>
    </section>
  );
}


export function ProposalContentSections({ activeSection, activeSubSection }: ProposalContentSectionsProps) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: ProposalContentSections fired");
  }

  if (activeSection === "scope") return <ScopeSection />;
  if (activeSection === "external-services") return <ExternalServicesSection />;
  if (activeSection === "work-breakdown") {
    if (activeSubSection === "wbs-otp-flow") return <WbsOtpFlowSection />;
    if (activeSubSection === "wbs-login") return <WbsLoginSection />;
    if (activeSubSection === "wbs-forgot-password") return <WbsForgotPasswordSection />;
    if (activeSubSection === "wbs-sign-up") return <WbsSignUpSection />;
    return <WorkBreakdownSection />;
  }
  if (activeSection === "main-screens") {
    if (activeSubSection === "screens-home-hero") return <MainScreensHeroSection />;
    if (activeSubSection === "screens-home-subscriber") return <MainScreensSubscriberSection />;
    if (activeSubSection === "screens-home-nonsubscriber") return <MainScreensNonSubscriberSection />;
    if (activeSubSection === "screens-reviewer-modal") return <MainScreensReviewerModalSection />;
    return <MainScreensSection />;
  }
  if (activeSection === "profile-screen") return <ProfileScreenSection />;
  if (activeSection === "admin-brd") {
    if (activeSubSection === "admin-brd-dashboard") return <AdminBrdDashboardSection />;
    if (activeSubSection === "admin-brd-subscribers") return <AdminBrdSubscribersSection />;
    if (activeSubSection === "admin-brd-unsubscribers") return <AdminBrdUnsubscribersSection />;
    if (activeSubSection === "admin-brd-modules") return <AdminBrdModulesSection />;
    if (activeSubSection === "admin-brd-payments") return <AdminBrdPaymentsSection />;
    return <AdminBrdMainSection />;
  }
  return <ScopeSection />;
}
